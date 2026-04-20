"""
Scrapes Instagram handles for Ontario high schools using Playwright + DuckDuckGo.
Runs 3 targeted queries per school to maximize coverage.
Skips schools that already have handles. Checkpoints every 10 schools.
"""

import csv
import re
import time
import random
from pathlib import Path
from playwright.sync_api import sync_playwright
from tqdm import tqdm

CSV_PATH = Path(__file__).parent / "ontario_high_schools_outreach.csv"
BACKUP_PATH = CSV_PATH.with_suffix(".csv.bak")

INSTAGRAM_RE = re.compile(r"(?:instagram\.com/)([\w.]+)/?", re.IGNORECASE)
EXCLUDE_HANDLES = {
    "p", "explore", "accounts", "reel", "reels", "stories",
    "tv", "popular", "hashtag", "about", "legal", "privacy", ""
}

QUERIES = [
    '"{name}" {city} ontario instagram',
    '"{name}" student council OR student government instagram',
    '"{name}" student club OR sports team instagram',
]

MAX_HANDLES_PER_SCHOOL = 10
# Delay between queries within one school (seconds)
INTER_QUERY_SLEEP = (3.0, 6.0)
# Delay between schools
INTER_SCHOOL_SLEEP = (5.0, 10.0)


def load_csv():
    with open(CSV_PATH, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        return list(reader), reader.fieldnames


def get_fieldnames():
    with open(CSV_PATH, newline="", encoding="utf-8") as f:
        return csv.DictReader(f).fieldnames


def schools_with_handles(rows):
    result = set()
    for r in rows:
        if r["instagram_handle"] not in ("nan", "", "NaN", None):
            result.add((r["school_name"], r["city"]))
    return result


def schools_needing_scrape(rows):
    has_handles = schools_with_handles(rows)
    seen = set()
    out = []
    for r in rows:
        key = (r["school_name"], r["city"])
        if key not in has_handles and key not in seen:
            seen.add(key)
            out.append({
                "school_district": r["school_district"],
                "school_name": r["school_name"],
                "city": r["city"],
                "school_size": r["school_size"],
            })
    return out


def extract_handles(content, seen):
    new = []
    for m in INSTAGRAM_RE.finditer(content):
        h = m.group(1).lower().strip("_")
        if h not in EXCLUDE_HANDLES and h not in seen:
            seen.add(h)
            new.append(h)
    return new


def search_school(page, school):
    seen = set()
    handles = []
    name = school["school_name"]
    city = school["city"]

    for i, template in enumerate(QUERIES):
        if len(handles) >= MAX_HANDLES_PER_SCHOOL:
            break
        query = template.format(name=name, city=city)
        url = f"https://duckduckgo.com/?q={requests_encode(query)}&ia=web"
        try:
            page.goto(url, wait_until="networkidle", timeout=20000)
            time.sleep(2.0)
            new = extract_handles(page.content(), seen)
            handles.extend(new)
        except Exception as e:
            tqdm.write(f"  [q{i+1} error for {school['school_name']}: {e}]")

        if i < len(QUERIES) - 1:
            time.sleep(random.uniform(*INTER_QUERY_SLEEP))

    return handles[:MAX_HANDLES_PER_SCHOOL]


def requests_encode(s):
    from urllib.parse import quote_plus
    return quote_plus(s)


def classify_handle(handle):
    h = handle.lower()
    if any(k in h for k in ("sac", "council", "gov", "studentgov", "stugov")):
        return "student_council"
    if any(k in h for k in ("basketball", "soccer", "volleyball", "swim", "track",
                             "football", "hockey", "rugby", "tennis", "athletic",
                             "sport", "cheer", "lacrosse", "cross", "golf", "badminton")):
        return "sports"
    return "student_club"


def build_rows_for_school(school, handles):
    base = {
        "school_district": school["school_district"],
        "school_name": school["school_name"],
        "city": school["city"],
        "school_size": school["school_size"],
        "contacted": "",
        "contact_date": "",
        "response_status": "",
        "notes": "",
    }
    if not handles:
        return [{**base, "instagram_handle": "nan", "instagram_type": ""}]
    return [{**base, "instagram_handle": h, "instagram_type": classify_handle(h)} for h in handles]


def save_csv(rows, fieldnames):
    with open(CSV_PATH, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def main():
    BACKUP_PATH.write_bytes(CSV_PATH.read_bytes())
    print(f"Backed up CSV to {BACKUP_PATH.name}")

    rows, fieldnames = load_csv()
    to_scrape = schools_needing_scrape(rows)
    print(f"{len(to_scrape)} schools need Instagram handles\n")

    # Keep all original rows intact; replace per-school only as we go
    new_rows = []
    remaining_rows = list(rows)  # will shrink as schools are processed

    with sync_playwright() as p:
        # headless=False required — DuckDuckGo blocks headless fingerprints
        browser = p.chromium.launch(headless=False, args=["--window-size=1280,900"])
        ctx = browser.new_context(
            user_agent=(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0.0.0 Safari/537.36"
            ),
            viewport={"width": 1280, "height": 900},
        )
        page = ctx.new_page()

        bar = tqdm(to_scrape, unit="school", dynamic_ncols=True)
        for i, school in enumerate(bar, 1):
            bar.set_description(f"{school['school_name'][:40]}, {school['city']}")
            handles = search_school(page, school)
            bar.set_postfix(found=len(handles), total_handles=sum(
                1 for r in new_rows if r["instagram_handle"] != "nan"
            ) + len(handles))

            # Remove this school's old placeholder rows and append new results
            key = (school["school_name"], school["city"])
            remaining_rows[:] = [r for r in remaining_rows if (r["school_name"], r["city"]) != key]
            new_rows.extend(build_rows_for_school(school, handles))

            if i % 10 == 0:
                save_csv(remaining_rows + new_rows, fieldnames)
                tqdm.write(f"  [checkpoint saved at {i} schools]")

            time.sleep(random.uniform(*INTER_SCHOOL_SLEEP))

        browser.close()

    save_csv(remaining_rows + new_rows, fieldnames)
    found = sum(1 for r in new_rows if r["instagram_handle"] != "nan")
    print(f"\nDone. {found} new handles across {len(to_scrape)} schools.")


if __name__ == "__main__":
    main()
