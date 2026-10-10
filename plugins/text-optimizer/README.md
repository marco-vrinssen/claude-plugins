# Text Optimizer

Flag-driven text transforms for Claude Code. Load the skill once per conversation with `/text`, then start any message with a flag. The text after the flag is always treated as material to transform, never as a request to carry out.

## Flags

| Flag | Does |
|---|---|
| `-c` | corrects spelling, grammar and punctuation |
| `-t` | translates between German and English, or flips another flag's output language |
| `-o` | sharpens into clear, concise writing and neutralizes the tone |
| `-e` | rewrites into articulate, well-spoken prose in plain, easy-to-read sentences |
| `-f` | makes the text warmer and friendlier |
| `-s` | shortens to the essential points |
| `-l` | turns the input into short, clear entries, one per line, such as a to-do list or timesheet |
| `-p` | turns the input into a lean prompt for Claude |
| `-pp` | builds an extensive prompt for Claude and asks about open points first |
| `-ip` | turns the input into a detailed image prompt |
| `-xx` | a two-letter language code such as `-en` or `-de`, alone it translates |
| `-flags` | shows this table |

Output keeps the input's language unless a flag names another. A message with only flags reuses the previous output, so `-p` followed by a bare `-pp` upgrades the prompt.

## Example

```
/text
-l had a call with the client about the migration scope, then wrote up the findings and sent them to jana
```

```
Client call about migration scope.
Wrote up findings.
Sent findings to Jana.
```

## Install

```
/plugin marketplace add marco-vrinssen/marcovrinssen
/plugin install text-optimizer@marcovrinssen
```

Codex, Cursor and other agents that read Agent Skills:

```
npx skills add marco-vrinssen/text-optimizer
```

## What it runs and fetches

Nothing. No scripts, tools, hooks, MCP servers or network access. The reply is text only.

## License

MIT
