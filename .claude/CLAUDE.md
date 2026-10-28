# claude-plugins

## Rules

- The repo is the marketplace `marco-vrinssen`. Each plugin lives in `plugins/<name>/` with its own `.claude-plugin/plugin.json`, `skills/`, README and CHANGELOG, and is listed in `.claude-plugin/marketplace.json` with `source: "./plugins/<name>"`.
- Only public plugins go here. Private plugins stay in their own private repos.
- A plugin and its skill share one name, so the skill runs as `/<name>:<name>`. A generic name can trigger a review hold in Anthropic's plugin directory, which is accepted.
## Checks

- `claude plugin validate --strict .` checks the marketplace, and `claude plugin validate --strict plugins/<name>/.claude-plugin/plugin.json` each plugin. Fix every warning.
- `npx skills add . --list` confirms that other agents find every skill.
- The Validate workflow runs all of them on every push to `main` and every pull request.

## Add a plugin

1. Create `plugins/<name>/` with `.claude-plugin/plugin.json`, `skills/`, README and CHANGELOG.
2. Add an entry to `.claude-plugin/marketplace.json` and a row to the README table.
3. Run the checks.

## Release

1. Bump `version` in the plugin's `plugin.json`, or installed copies never update.
2. Add the changes to the plugin's `CHANGELOG.md`.
3. Push and wait for the Validate workflow to pass.
4. Tag `<name>-vX.Y.Z` and create a GitHub release.
