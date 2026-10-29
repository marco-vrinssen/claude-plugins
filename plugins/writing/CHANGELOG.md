# Changelog

## 3.0.0 (2026-10-29)

- `-s` and the Shorten button are gone. `-sh` now also cuts repetition and elaboration that adds nothing, keeping names, numbers, dates, decisions, deadlines and the input's form.
- `-su` summarizes as a short bullet list, main point first.

## 2.1.0 (2026-10-29)

- `-e` now writes like a very intelligent lawyer: precise, measured and slightly juridical, with the point first, then its ground and consequence. Still no legalese, nested clauses or added claims.
- `-s` aims for about half the length or less and always keeps names, numbers, dates, decisions and deadlines.
- `-su` writes at least one full sentence, even on a short input.
- `-w` adds warmth only through requests, courtesies and one acknowledging clause, never a new promise, offer, apology or fact.
- `-t` renders an idiom by its natural equivalent.
- New examples for `-su`, `-w`, `-t` and `-h`, and one closing check replaces the three scattered ones in the core rules.

## 2.0.0 (2026-10-29)

- Flags match the button names, two letters at most: Sharpen `-sh`, Warm `-w`, Summarize `-su`, Prompt (Enhanced) `-pe`, Prompt (Image) `-pi` and Prompt (Security) `-ps`. The old `-o`, `-f`, `-sum`, `-pp`, `-ip` and `-sp` are gone.
- Sundanese, Pali and Pashto now take their three-letter codes `-sun`, `-pli` and `-pus`.

## 1.14.1 (2026-10-29)

- The Eloquent button is back, after Sharpen.

## 1.14.0 (2026-10-29)

- New `-sum` flag and Summarize button: a short overview of the input, main point first.
- Friendly is now Warm, and the prompt buttons read Prompt, Prompt (Enhanced), Prompt (Image) and Prompt (Security).
- The Eloquent button is gone, `-e` still works as a flag.
- The picker is now Response Language.

## 1.13.0 (2026-10-29)

- The band's inner padding is tight again, and the rows sit closer together on desktop.

## 1.12.0 (2026-10-29)

- The band follows the new layout: Prompt sits after Security prompt, and the Language dropdown follows the buttons directly.
- Same is now Original.
- Hide is gone, so the band stays for the rest of the session.

## 1.11.0 (2026-10-29)

- `-pp` asks its open questions as clickable choices, four at a time and as many rounds as it takes. Pick an answer, type your own or leave it open. Headless runs still get the numbered list.

## 1.10.0 (2026-10-29)

- Tighter space between rows of buttons on desktop.

## 1.9.0 (2026-10-29)

- On desktop each row of buttons is as tall as a button, so one even gap spaces the buttons across and down.

## 1.8.0 (2026-10-29)

- Wrapped rows of buttons no longer overlap on desktop. Each row gets one line of space for the button padding.

## 1.7.0 (2026-10-29)

- Tighter, even spacing between the buttons, the smallest step across and down.

## 1.6.0 (2026-10-29)

- The Language picker is a dropdown again, Korean included.
- The buttons share one even gap, the same between columns and rows.
- Fix is now Correct and Prompt pro is now Prompt (Enhanced).

## 1.5.0 (2026-10-29)

- The Language picker is a button like the others. It opens one button per language in place of the flags, and a pick closes it again.
- Korean joins the languages.
- More space between the buttons.

## 1.4.0 (2026-10-29)

- A Language picker in the band sets the output language for every button: Same keeps the input's language, or pick English, German, French, Spanish, Italian, Dutch or Russian.
- The flag buttons are real buttons with spacing between them, native buttons on desktop and `[ Fix ]` in the terminal. Hide is the band's close control.

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
