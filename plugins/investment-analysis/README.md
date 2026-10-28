# Investment Analysis

Investment research for private investors in Germany. Give it a company, ticker, ISIN, ETF, theme, startup pitch or stock tip and get a sourced report with a buy, watch or avoid verdict.

## What it does

- Asks where to save the report and in which format: Markdown, Word or PDF.
- Researches primary sources first: filings, annual reports, factsheets and KIDs. Every number carries its source and date.
- Covers listed companies, ETFs, themes, social media pick lists and private deals, each with its own structure.
- Writes the bear case as hard as the bull case and ends with buying routes and German tax rules.

## Usage

```
/investment-analysis <company, ticker, ISIN, ETF, theme or link> [question]
```

## Install

```
/plugin marketplace add marco-vrinssen/claude-plugins
/plugin install investment-analysis@marco-vrinssen
```

Codex, Cursor and other agents that read Agent Skills:

```
npx skills add marco-vrinssen/claude-plugins --skill investment-analysis
```

## Disclaimer

The reports are research, not investment advice. Check tax questions with a Steuerberater.
