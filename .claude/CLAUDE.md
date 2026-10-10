# marcovrinssen

## Rules

- The marketplace only lists plugins. Each plugin's code, version and release steps live in its own repo, with a `github` source here.
- Only public plugin repos go here. Private plugins such as website-pitch and pitch-mail stay out.
- WoW plugins belong to the `miyanko-dev` marketplace, not here.

## Add a plugin

1. Add an entry to `.claude-plugin/marketplace.json` and a row to the README table.
2. Run `claude plugin validate --strict .` and fix every warning.
3. Push and wait for the Validate workflow to pass.
