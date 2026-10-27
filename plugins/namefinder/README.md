# Namefinder

Generates names for brands, products, projects and characters from sound symbolism, tuned to your taste.

## Usage

```
/namefinder <what is named and the desired feel>
/namefinder -l <what is named and the desired feel>
```

`-l` returns a bare list without explanations. It also triggers on its own when you ask for name ideas.

## Install

```
/plugin marketplace add marco-vrinssen/claude-plugins
/plugin install namefinder@marco-vrinssen
```

Codex, Cursor and other agents that read Agent Skills:

```
npx skills add marco-vrinssen/claude-plugins --skill namefinder
```
