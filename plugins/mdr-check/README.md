# MDR Check

Reviews marketing copy for health, wellness, fitness, nutrition and digital-health products. It flags wording that could make a regulator, competitor or court read the product as a medical device, or that counts as an illegal medical claim under EU MDR 2017/745, the German HWG and UWG.

## What you get

- Every flagged phrase with where it sits, why it is risky, its legal hook and a risk tier from R0 to R3.
- A rewrite per finding that keeps the marketing message and roughly the same length.
- An overall-impression check, since German advertising law judges the whole page, not single sentences.
- A list of surfaces that were not reviewed and open questions for your lawyer.

The report is written in the copy's language, so German copy gets a German report.

## Usage

```
/mdr-check <text, file path or URL>
```

It also triggers on its own when you ask whether copy sounds like a medical claim.

For consistent results across runs, keep a product profile as `mdr-profile.md` in your project root. The skill offers to create one from its template on the first run.

## Install

```
/plugin marketplace add marco-vrinssen/marcovrinssen
/plugin install mdr-check@marcovrinssen
```

Codex, Cursor and other agents that read Agent Skills:

```
npx skills add marco-vrinssen/mdr-check
```

## What it runs and fetches

No scripts, hooks, MCP servers or telemetry. It fetches a page only when you pass a URL, and reads only files you name or the product profile in your project.

## Limits

This is a repeatable self-check before legal review, not legal advice. It never certifies copy as safe and does not decide whether your product is a medical device. Article and section numbers are pointers for your lawyer. Verify anything load-bearing against the current consolidated law.

## License

MIT
