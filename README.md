# Claude plugins

Claude Code plugins by Marco Vrinssen, published as the marketplace `marco-vrinssen`.

| Plugin | Does |
|---|---|
| [text-optimizer](plugins/text-optimizer) | flag-driven text transforms: correct, translate, sharpen, shorten, build prompts |
| [mdr-check](plugins/mdr-check) | flags health marketing copy that could count as a medical claim under EU MDR, HWG and UWG |
| [video-reader](plugins/video-reader) | reads YouTube videos through transcript, chapters and frames |
| [resume-ai-optimizer](plugins/resume-ai-optimizer) | optimizes resumes for AI screening: readable PDF, keyword fit, quantified bullets |

## Install

```
/plugin marketplace add marco-vrinssen/claude-plugins
/plugin install text-optimizer@marco-vrinssen
```

Swap in any plugin name from the table.

Codex, Cursor and other agents that read Agent Skills:

```
npx skills add marco-vrinssen/claude-plugins
```

## License

MIT
