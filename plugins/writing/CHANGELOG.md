# Changelog

## 1.3.0 (2026-10-29)

- A band of buttons above the prompt appears once you type `/writing`. Each button sends the draft with its flag, or with an empty draft reworks the last output. Hide closes it until the next `/writing`.

## 1.2.0 (2026-10-28)

- Translations use the established names and terms of the text's field instead of literal ones: official game, film and software names, legal, medical and technical terms, job titles. A name whose official form is unknown stays as written.
- New modifier `-in:<field>`, such as `-in:wow` or `-in:german-employment-law`, names the field when the text does not show it.

## 1.1.0 (2026-10-28)

- The prompt flags `-p`, `-pp`, `-ip` and `-sp` moved to `references/prompts.md`, read only when one of them runs, so every other flag loads about half as much text.
- Three-letter ISO 639-2 language codes such as `-rus` now work as language flags.

## 1.0.0 (2026-10-27)

- First release. Flag-driven text transformation. One flag fixes, translates, sharpens, shortens, lists or humanizes text, or turns it into a prompt for Claude. Keeps the input's language and meaning.
