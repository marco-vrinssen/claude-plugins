---
name: financial-analysis
description: "Investment research for a private investor in Germany. Give a company, ticker, ISIN, ETF, theme, startup pitch or social media stock tip and get a sourced decision report with a buy, watch or avoid verdict. Invoke as /financial-analysis <target> [question]. Use whenever the user asks whether to invest in something, what a stock, fund or theme is worth, or to fact-check stock picks."
argument-hint: "<company, ticker, ISIN, ETF, theme or link> [question]"
---

# Financial analysis

Decision research for a private investor in Germany. The target is: $ARGUMENTS

The result is a report in the folder and format the user picks and a short reply with the verdict.

## Rules

1. Every number carries its source and date. Name missing data as missing, never estimate it silently.
2. Primary sources first: filings, annual reports, issuer factsheets and KIDs. News only for events, aggregators only to cross-check.
3. Show the math for every valuation figure and every euro amount.
4. Write the bear case as hard as the bull case. Name what would prove the thesis wrong.
5. No hype and no own price targets. Quote analyst targets as dated consensus, never as a forecast.
6. If the user has a financial plan, respect its fixed decisions. Name a trade-off once, then plan around it.
7. Flag in one line where a Steuerberater or licensed advisor is needed, only where it applies.
8. Never ask for account numbers, logins or depot balances. Totals are enough.

## Steps

1. Pin the target: name, ticker, ISIN, primary listing and currency. Ask when two instruments match.
2. Ask where to save the report and in which format, unless the user said so. Offer the current folder and Markdown as defaults, with Word and PDF as options.
3. Search that folder for an existing report on the target. Update it instead of writing a second one.
4. Ask for the monthly amount free to invest and any fixed plan decisions, unless the folder holds a plan note. The user may skip this.
5. Research by type, see below. For a theme, research the clusters in parallel with subagents.
6. Write the report, then reply.

## Sources

- Stamp prices, market caps and multiples "as of YYYY-MM-DD".
- SEC filings (10-K, 10-Q, 8-K, Form 4, 13F): WebFetch on sec.gov, since curl and Python get 403. Check a transcription against a total in the same filing.
- European companies: annual report and investor presentation on the IR site. German ones also in the Unternehmensregister.
- ETFs: issuer factsheet and KID, justETF for TER, size, domicile and distribution.
- Quotes: a quote page through WebFetch. When it is blocked, use a browser tool if one is available.
- Smart money: 13F filings of known funds plus Form 4 insider trades.

## By type

### Listed company

1. Snapshot table: ticker, ISIN, exchange, currency, price, market cap, net debt, EV, as-of date.
2. Business: what it sells, who pays, revenue share by segment and region.
3. Numbers: five-year table of revenue, growth, gross margin, operating margin, free cash flow, net debt and diluted shares.
4. Moat and competition: where the margin comes from and who attacks it.
5. Management: insider ownership, insider trades of the last 12 months, stock comp as share of revenue, buybacks against dilution, M&A record.
6. Valuation: P/E, EV/EBIT, EV/sales and FCF yield against the own five-year range and three peers. Reverse DCF: the growth the price implies, with the math.
7. Bull case and bear case.
8. Risks ranked by likelihood times damage, EUR currency risk included.
9. Catalysts with dates: earnings, products, regulation, lockups, index changes.

### ETF

Index method, top 10 weight, sector and country split, TER, fund size, domicile, replication, distribution and tracking difference. Overlap with what the user already holds, ask if unknown. Prefer UCITS, Irish domicile for US exposure.

### Theme

1. The real thesis in a few sentences.
2. The numbers that matter.
3. Value chain clusters with their listed leaders.
4. The bottleneck nobody indexes.
5. UCITS ETFs on the theme and their overlap.
6. A core and satellite table under "How I would actually express this".

### Social post or pick list

Per pick: the claim, then correct, stale, half right, wrong or unverifiable, with the fact and its source. Then the theme section.

### Private deal or startup

1. Status of the source: who pitches, what they gain.
2. Numbers check against public data.
3. Diligence list.
4. Competition the pitch leaves out.
5. Questions for the founders.
6. Listed proxies for the same thesis.

## Every report ends with

- How to buy from Germany: ISIN, Xetra or Tradegate listing, UCITS route. US-domiciled ETFs have no KID, so EU retail cannot buy them.
- Tax: Abgeltungssteuer 25 % plus Soli is 26.375 %, plus church tax where it applies. Sparerpauschbetrag 1,000 EUR. US dividends lose 15 % withholding with W-8BEN, credited against it. Equity ETFs get 30 % Teilfreistellung, accumulating ones pay the Vorabpauschale. Recheck the rates each January.
- Fit with the plan: if the user carries debt, paying it down earns its rate risk-free, so set that rate against the expected return. Size in EUR per month from the free amount, never as a lump sum the plan lacks.
- Verdict: buy, watch or avoid. Watch names its trigger as a price, event or date. Add what would change the verdict.
- Open questions.
- Sources: each link with what it contributed and the access date.

## Report format

- File `<Name> Investment Analysis`, or `<Theme> Investment Strategy` for a theme, with the extension of the chosen format.
- The user's language. One title, an "In short" section with 2 to 4 bullets and the verdict last. Tables where items share attributes. No bold.
- Markdown: frontmatter with `tags` (`invest` plus `aktien`, `etf` or `startup`), `ticker`, `isin`, `verdict`, `as_of`, `created` and `updated`. Link related reports in the same folder.
- Word or PDF: use a document skill or tool if one is available, otherwise write Markdown and say so.

## Reply

First line is the verdict in one sentence, in the user's language. Then the In short bullets and the report path. Never paste the full report into the chat.
