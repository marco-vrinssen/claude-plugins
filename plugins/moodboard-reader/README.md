# Moodboard Reader

Lets Claude search and read [Cosmos](https://www.cosmos.so), the visual inspiration library: images, GIFs and videos by meaning, public collections and profiles, and your own private collections when you sign in. Read-only.

Unofficial and not affiliated with Cosmos.

## Install

```
/plugin marketplace add marco-vrinssen/claude-plugins
/plugin install moodboard-reader@marco-vrinssen
```

The install asks for your Cosmos email or username and password, and keeps the password in your system's secure storage. Leave both empty for public content only. Change them later with `/plugin configure moodboard-reader@marco-vrinssen`.

Requires Node 22 or later and git.

## Use

Ask Claude things like:

- "Find brutalist concrete staircases on Cosmos."
- "What is in my Cosmos collection Packaging?"
- "Search https://www.cosmos.so/cosmos for warm food photography."

## How it works

The plugin runs the MCP server [cosmos-mcp](https://github.com/marco-vrinssen/cosmos-mcp) 1.x through `npx`. Its tools, limits and privacy notes are in that README.

| Tool | Does |
|---|---|
| `search` | finds elements by meaning on all of Cosmos, or inside one profile or collection |
| `collections` | lists your own collections, or finds public ones by a query |
| `get_collection` | reads a collection, subcollection or profile by its cosmos.so link |
