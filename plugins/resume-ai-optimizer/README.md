# Resume AI Optimizer

Optimizes a resume for hiring where AI screens first and a human decides. Built on five rules from hiring research summarized by Jeff Su in [Write a Killer Résumé in the AI Era](https://www.youtube.com/watch?v=N1Fm4JYae1I).

## What you get

- A readability check of your PDF: selectable text, file size, columns, headings and the text in the order a parser reads it.
- With a job description: the employer's core problems and a keyword map that shows which terms your experience proves and which it doesn't.
- Every bullet rewritten into Google's XYZ form, accomplished X as measured by Y by doing Z, with generic AI phrasing removed.
- Questions for every missing number. It never invents facts, numbers or keywords.
- Advice on proving AI skills with a relevant first bullet or a small project.

## Usage

```
/resume-ai-optimizer <resume.pdf or text> [job description, URL or file]
```

Without a job description it runs the audit only. Rough notes about one role turn into bullets. It also triggers on its own when you ask to improve or tailor a resume or CV.

## Install

```
/plugin marketplace add marco-vrinssen/claude-plugins
/plugin install resume-ai-optimizer@marco-vrinssen
```

Codex, Cursor and other agents that read Agent Skills:

```
npx skills add marco-vrinssen/claude-plugins --skill resume-ai-optimizer
```

## What it runs and fetches

| Action | Where |
|---|---|
| `scripts/check_pdf.py` reads your resume PDF with pypdf | local |
| Fetches a job posting, only when you pass a URL | the posting's site |

The PDF check needs Python 3 and `pypdf` (`python3 -m pip install pypdf`). No hooks, MCP servers or telemetry. Not affiliated with Jeff Su.

## Limits

The column guess is a heuristic. Screening systems differ, and no check guarantees how a specific one parses your file. Research numbers come from a summary of studies and reports, not from primary sources.

## License

MIT
