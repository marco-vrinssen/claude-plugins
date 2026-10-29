---
name: namefinder
description: "Generate aesthetic, clean names for brands, products, projects, handles or characters from sound symbolism and a fixed name logic. Invoke as /namefinder <what is named and the desired feel>, or /namefinder -l <...> for a bare list. Use whenever the user wants name ideas for anything."
---

# Namefinder

A good name sounds finished when said once and looks balanced set in a plain sans. Its feel comes from sound and form, its meaning from somewhere else.

## Modes

- `/namefinder <brief>`: profile line, 15 names with notes, top 3.
- `/namefinder -l <brief>`: 30 names, one per line, nothing else.
- A number in the brief sets the count, a character limit sets the maximum length. Letters the brief fixes, such as a start or an end, are kept in every name.

When the brief gives no feel, infer 3 to 5 adjectives from the topic. Never ask back.

## Name logic

### 1. Borrow, don't describe

A name lifts a real word from a field far from the thing it names: science, astronomy, rock and matter, type and design, myth, places, plants and food, music, weighty German words, plain words that sound big. The borrowed word brings its prestige and its sound, never a description. Test: it could also be a typeface, a star, a stone or a myth (Pulsar, Opal, Grotesk, Gaia).

### 2. Economy

- 3 to 8 letters, 1 to 3 syllables, stress on the first. Every letter is heard.
- One word in Title Case. A second word only as a plain number or modifier.

### 3. Few vowels, repeated

One or two vowel sounds per name, often the same one twice (Saga, Yuzu, Opus, Totem) or a bright one against a dark one (Klima, Orbit). No more than two vowels in a row.

### 4. One hard, one soft

Pair one hard consonant (k, t, p, g, b, x) with one soft (l, r, m, n, s, v). The hard one gives edge, the soft one flow (Volt, Opal, Kern, Atlas, Magma). Consonant clusters only at the start or end of the word, never three in the middle.

### 5. Clean edges

- Start on a strong letter: a vowel (A, O, E) or a firm consonant (K, M, S, T, V).
- End either open on a vowel (-a, -o, -u, -i) for softness or on one clear consonant (-t, -k, -s, -m, -n, -l, -r) for closure.

### 6. Shape on the page

Mix round letters (a, o, e, u) with straight ones (l, t, k, i). A y works as one accent. No awkward pairs like ck, ph, gh in the middle, no double letters unless they carry the rhythm.

### 7. Transform when needed

When the borrowed word is too long, too plain or too common, transform it once:

- Clip the suffix to a hard end (Anthrop from anthropic, Mycel from mycelium).
- Respell with y, a doubled or a dropped letter (Irys, Appl, Rushh).
- Use the German or European spelling (Granit, Isotop, Kollision).
- Repeat a syllable for rhythm (Oyoy).

### 8. Tone

Calm, confident and timeless, sometimes heavy (Wucht, Brutal), playful only through rhythm. Never puns, literal descriptions, invented compounds like CloudSync, suffixes like -ify, -ly or -io, hyphens or digits. Never return an example from this skill.

## Sound to feel

| Sound | Feel |
| --- | --- |
| i, e | small, bright, quick, light |
| a | broad, plain, calm |
| o, u | large, dark, slow, heavy |
| k, t, p | hard, sharp, decisive |
| b, d, g | hard and heavier, rounder |
| s, f, sh | airy, sleek, technical |
| v, z | sleek and heavier |
| m, n | soft, warm, humming |
| l, r | smooth, flowing, elegant |
| kr, st, sk, tr | harsh, mechanical, precise |
| gl, bl, fl, pl | warm, glowing, gentle |
| sl, sn, sw | sly, quick, sleek |

1 to 2 syllables feel punchy and modern, 3 grand and ancient. Soft voiced sounds feel round, sharp voiceless ones angular.

## Method

1. Fix 3 to 6 adjectives for the feel and turn them into a sound profile with the table.
2. Pick 2 or 3 source fields whose words carry that sound.
3. Lift words from them, then transform where rule 7 helps. Generate well past the count.
4. Score each name against rules 2 to 6 and keep only those that pass all of them.
5. Rank by how well the sound matches the profile.

## Output

1. `Profile: <adjectives> → <sound profile>`
2. A numbered table with Name and Sound, each note at most 5 words.
3. `Top 3`, one line each on why it fits the brief.

Only find names. No brand, trademark, domain or handle checks, the user does those.
