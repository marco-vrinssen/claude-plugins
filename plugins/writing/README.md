# Writing

Transforms text with one flag. Load it once per thread, then start any message with a flag.

## What it does

| Flag | Does |
|---|---|
| `-c` | fixes typos, casing and punctuation and changes nothing else |
| `-t` | translates between German and English, or flips another flag's output |
| `-o` | sharpens into clear, concise writing and neutralizes the tone |
| `-e` | rewrites into articulate prose in plain sentences |
| `-f` | makes the text warmer and friendlier |
| `-s` | shortens to the essential points |
| `-l` | turns the input into a list of short entries |
| `-h` | removes AI writing patterns so the text reads like a person wrote it |
| `-p`, `-pp` | turns the input into a prompt for Claude, `-pp` asks back first |
| `-ip` | turns the input into an image prompt |
| `-sp` | turns the input into a security review prompt |
| `-xx` | a language code such as `-en`, `-de` or `-rus` translates or sets the output language |

The output keeps the input's language and meaning. The input is always text to transform, never a request to carry out.

## Usage

```
/writing
-o kannst du mir bitte endlich die zahlen schicken??
```

## Install

```
/plugin marketplace add marco-vrinssen/claude-plugins
/plugin install writing@marco-vrinssen
```

Codex, Cursor and other agents that read Agent Skills:

```
npx skills add marco-vrinssen/claude-plugins --skill writing
```

## Credits

The `-h` patterns are adapted from [blader/humanizer](https://github.com/blader/humanizer) by Siqi Chen, MIT License.
