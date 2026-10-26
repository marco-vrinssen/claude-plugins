# Computer Checkup

Finds out why a Mac is slow, full or at risk, and fixes only what you approve. Built on seven troubleshooting prompts shared by [eluna.ai](https://www.instagram.com/p/De5k-96khbI/), turned into concrete macOS checks.

## What it does

1. Asks which areas to cover, split like the seven prompts: processes, login items, unused apps, storage, security, backups and a comparison with the last run.
2. Runs read-only checks with the tools macOS ships.
3. Reports findings and numbered fixes, each with its gain and how to undo it, and saves the report.
4. Applies only the fixes you confirm. Files go to the Trash. Settings that need your password stay with you.

## Usage

```
/maccheck
```

For a monthly checkup, run it once a month and pick Compare. It also triggers on its own when you say your Mac is slow or full.

## Install

```
/plugin marketplace add marco-vrinssen/claude-plugins
/plugin install computer-checkup@marco-vrinssen
```

Codex, Cursor and other agents that read Agent Skills:

```
npx skills add marco-vrinssen/claude-plugins --skill maccheck
```

## What it runs and fetches

| Action | Where |
|---|---|
| macOS tools such as `top`, `sfltool`, `du`, `mdfind`, `lsof`, `codesign` and `tmutil` | local, read-only until you confirm a fix |
| `scripts/extensions.py` reads browser extension manifests | local |
| `softwareupdate --list` asks Apple for pending updates | Apple's update servers |
| Saves each report | `~/Library/Logs/maccheck/` |

Needs macOS 13 or later and Python 3. Some checks need macOS 15. No hooks, MCP servers or telemetry. Not affiliated with Apple or eluna.ai.

## Limits

It reads only what macOS shows without an admin password, so processes and connections of other users stay hidden. Without Full Disk Access some folders are skipped and sizes are a lower bound. It is not a malware scanner.

## License

MIT
