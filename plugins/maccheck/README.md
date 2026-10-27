# Maccheck

Finds out why a Mac is slow, full or at risk, then fixes only what you approve.

## What it does

- Asks which areas to cover: processes, login items, unused apps, storage, security, backups and a comparison with the last run.
- Runs read-only checks and reports findings with numbered fixes.
- Saves each report to `~/Library/Logs/maccheck/` so the next run can compare.
- Applies only the fix numbers you reply with, and recommends a backup before anything that removes files.

## Usage

```
/maccheck
```

It also triggers on its own when you say your Mac is slow, hot or full.

## Install

```
/plugin marketplace add marco-vrinssen/claude-plugins
/plugin install maccheck@marco-vrinssen
```

Codex, Cursor and other agents that read Agent Skills:

```
npx skills add marco-vrinssen/claude-plugins --skill maccheck
```

## Requirements

macOS with `python3`.
