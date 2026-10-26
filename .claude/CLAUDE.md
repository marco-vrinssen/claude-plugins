# claude-plugins

## Rules

- The repo is the marketplace `marco-vrinssen`. Each plugin lives in `plugins/<name>/` with its own `.claude-plugin/plugin.json`, `skills/`, README and CHANGELOG, and is listed in `.claude-plugin/marketplace.json` with `source: "./plugins/<name>"`.
- A plugin for one of the owner's MCP servers has `.mcp.json` instead of `skills/` and runs the server's repo with `npx -y github:<owner>/<repo>#semver:^1`. The server's own instructions carry its usage rules, so the plugin adds no skill. Server releases reach users without a plugin release.
- Claude Code passes a `userConfig` option the user left unset as its literal `${user_config.…}` placeholder (checked 2026-10-26), so a server must treat that as unset.
- Only public plugins go here. Private plugins stay in their own private repos.
- A generic or brand name as plugin name triggers a review hold in the plugin directory. So the skills keep their short names: video-reader ships `/youtube`.
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
