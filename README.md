# Claude plugins

Claude Code plugins by Marco Vrinssen, published as the marketplace `marco-vrinssen`.

| Plugin | Does |
|---|---|
| [youtube-reader](plugins/youtube-reader) | reads YouTube videos through transcript, chapters and frames |
| [resume-ai-optimizer](plugins/resume-ai-optimizer) | optimizes resumes for AI screening: readable PDF, keyword fit, quantified bullets |
| [writing](plugins/writing) | transforms text with one flag: fix, translate, sharpen, shorten, humanize, prompt |
| [namefinder](plugins/namefinder) | generates names from sound symbolism, tuned to your taste |
| [maccheck](plugins/maccheck) | finds why a Mac is slow, full or at risk and fixes what you approve |
| [investment-analysis](plugins/investment-analysis) | sourced investment research with a buy, watch or avoid verdict |
| [wow-addon-dev](plugins/wow-addon-dev) | World of Warcraft addon and WeakAura development checked against Blizzard's UI source |

## Install

```
/plugin marketplace add marco-vrinssen/claude-plugins
/plugin install youtube-reader@marco-vrinssen
```

Swap in any plugin name from the table.

Codex, Cursor and other agents that read Agent Skills:

```
npx skills add marco-vrinssen/claude-plugins
```

## License

MIT
