# ADHD

An output style for short, readable replies that never overload working memory.

## What it does

- Orders every reply as an intro, key facts, open questions and one next step.
- Keeps sentences between 10 and 15 words, in active voice with the core point first.
- Caps lists at 3 to 5 items and puts headings on their own line.
- Bans em dashes, en dashes and semicolons in replies, code comments, commit messages and docs.
- Keeps Claude Code's coding instructions, so code work stays as thorough.

## Usage

Pick `adhd:ADHD` in `/output-style`, or set it in `~/.claude/settings.json`:

```json
"outputStyle": "adhd:ADHD"
```

It takes effect in the next session.

## Install

```
/plugin marketplace add marco-vrinssen/claude-plugins
/plugin install adhd@marco-vrinssen
```
