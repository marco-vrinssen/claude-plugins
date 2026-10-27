---
name: namefinder
description: "Generate brand, product, project or character names from sound symbolism, tuned to the user's taste. Invoke as /namefinder <what is named and the desired feel>, or /namefinder -l <...> for a bare list. Use whenever the user wants name ideas for anything."
---

# Namefinder

A word carries a feel through its sounds alone. Meaning is optional. A good name works because its sound already says what it should say.

## Modes

- `/namefinder <brief>` returns the long form: sound profile, 15 names with notes, top 3.
- `/namefinder -l <brief>` returns a bare list of 30 names, one per line, nothing else.
- A number in the brief overrides the count.

The brief names what is being named and the desired feel. When it gives no feel, infer 3 to 5 adjectives from the topic and state them in the profile line. Never ask back.

## Taste

Read the Apple Notes note `Names` in the iCloud folder `Notes` first, read-only: `osascript -e 'tell application "Notes" to get plaintext of note "Names" of folder "Notes" of default account'`. It is the user's growing list of names they like. Calibrate to it, never return a name already on it. If the note is missing, say so in one line and work from the patterns below.

Patterns in that list:

- Short. Mostly 2 syllables and 3 to 7 letters, rarely over 3 syllables.
- Often vowel-initial, A, O and E above all: Aeon, Opal, Orla, Eos, Atlas.
- Real words lifted from neutral fields: science, astronomy, geology, typography, Greek and Latin myth. Isotop, Pulsar, Basalt, Kern, Glyph, Mythos.
- German or European spellings over English ones: Granit, Diskret, Subtil, Grotesk, Kollision, Monopol.
- Clipped words ending on a hard consonant: Anthrop, Entrop, Agnost, Obscur.
- Respellings with y or a dropped vowel: Irys, Ysra, Myda, Nokya, Appl, Sofd.
- Soft open endings in -a and -o balance the hard ones: Soma, Klima, Osmo, Alto.
- Calm, confident, a little cold or ancient. Never cute or playful.

Never produce: puns, literal descriptions, compound SaaS names, suffixes like -ify, -ly or -io, hyphens or numbers.

## Sound to feel

### Vowels

- i, e (front, high): small, bright, quick, light.
- a (open): broad, plain, calm.
- o, u (back, low): large, dark, slow, warm, heavy.

### Consonants

| Group | Sounds | Feel |
| --- | --- | --- |
| Plosives | k, t, p, b, d, g | hard, sharp, sudden, decisive |
| Fricatives | s, f, sh, v, z | airy, sleek, hissing, technical |
| Nasals | m, n | soft, warm, humming |
| Liquids | l, r | smooth, flowing, elegant |

Voiceless sounds (k, t, p, s, f) feel lighter and sharper. Voiced sounds (g, d, b, z, v) feel heavier and rounder.

### Clusters

| Type | Examples | Feel |
| --- | --- | --- |
| Voiceless | kr, st, sk, tr | harsh, mechanical, precise |
| Liquid | gl, bl, fl, pl | warm, glowing, gentle |
| Sibilant | sl, sn, sw | sly, quick, sleek |

### Shape

- 1 to 2 syllables: punchy, modern, product-like.
- 3 or more syllables: grand, elegant, ancient.
- Stress on the first syllable: grounded, stable. On a later syllable: lifted, exotic.
- Open vowel ending (-a, -o): soft, unfinished, organic.
- Hard consonant ending (-k, -t): closed, decisive, technical.
- Bouba/kiki: soft voiced sounds feel round, sharp voiceless sounds feel angular.

## Method

1. Fix 3 to 6 adjectives for the feel.
2. Translate them into a sound profile: vowels, consonant groups, length, stress, ending.
3. Generate well past the count, invented words welcome, real words only if their sound fits.
4. Filter: readable on first sight, no stumble when said aloud, feel comes from sound, not meaning.
5. Drop accidental words or unfortunate readings in English and German, and names of well-known brands.

## Long form output

1. One line: `Profile: <adjectives> → <sound profile>`.
2. A numbered table with the columns Name and Sound, the note at most 5 words.
3. `Top 3`, one line each on why it fits the brief.
4. Search the web for each top 3 name plus the topic's field. Report a same-field brand by name and link, or `no same-field brand found`.

Brand notes on the 15 come from memory and are unverified, so never call a name free. A search is no trademark or domain clearance. Say so once under the top 3.

## List output

Names only, one per line. No numbering, notes, headings or checks.
