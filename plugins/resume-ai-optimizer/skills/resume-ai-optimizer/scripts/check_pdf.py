#!/usr/bin/env python3
"""Report how resume screening software sees a PDF: size, text, images, columns, reading order."""

import os
import re
import sys

SIZE_LIMIT_MB = 2.5

# A wide gap between text runs on one line hints at side-by-side columns.
COLUMN_GAP = re.compile(r"\S {6,}\S")


def column_ratio(layout_text):
    lines = [l for l in layout_text.splitlines() if l.strip()]
    if not lines:
        return 0.0
    return sum(1 for l in lines if COLUMN_GAP.search(l)) / len(lines)


def main():
    if len(sys.argv) != 2:
        sys.exit("usage: check_pdf.py <resume.pdf>")
    path = sys.argv[1]
    try:
        from pypdf import PdfReader
    except ImportError:
        sys.exit("pypdf is missing. Install it with: python3 -m pip install pypdf")

    size_mb = os.path.getsize(path) / 1_000_000
    reader = PdfReader(path)
    print(f"file:  {path}")
    print(f"size:  {size_mb:.2f} MB ({'ok' if size_mb < SIZE_LIMIT_MB else f'over {SIZE_LIMIT_MB} MB'})")
    print(f"pages: {len(reader.pages)}")

    plain_pages = []
    for i, page in enumerate(reader.pages, 1):
        plain = page.extract_text() or ""
        plain_pages.append(plain)
        try:
            layout = page.extract_text(extraction_mode="layout") or ""
        except Exception:
            layout = plain
        try:
            images = len(page.images)
        except Exception:
            images = "unknown"
        ratio = column_ratio(layout)
        guess = "likely multi-column" if ratio > 0.3 else "likely one column"
        print(f"page {i}: {len(plain.strip())} text chars, {images} images, {guess} ({ratio:.0%} of lines split)")

    total = sum(len(p.strip()) for p in plain_pages)
    if total == 0:
        print("\nNO SELECTABLE TEXT: the text is an image or outlined. Parsers read this resume as empty.")
        return
    print("\n--- text in parser reading order ---")
    for i, plain in enumerate(plain_pages, 1):
        print(f"\n[page {i}]\n{plain.strip()}")


if __name__ == "__main__":
    main()
