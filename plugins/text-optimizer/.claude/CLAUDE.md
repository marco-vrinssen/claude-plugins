# text-optimizer

## Rules

- A single-plugin repo. The plugin sits at the root and the skill lives in `skills/`. It is listed in the marketplace repo `marco-vrinssen/marcovrinssen`, not here.
- The plugin is named `text-optimizer` (`text-flags` until 2.0.0) and its skill stays `text`, so `/text` keeps working.
- `-l` never writes in a consulting register.
- `-e` writes plain, easy-to-read sentences and never a legal or official register.
- Every rule in `-p` traces to Anthropic's prompting docs, the best practices page and the Opus 5.5 and Sonnet 5.5 pages. Add none without such a source.

## Checks

- `claude plugin validate --strict .claude-plugin/plugin.json` checks the plugin. Fix every warning.
- `npx skills add . --list` confirms that other agents find the skill.
- The Validate workflow runs both on every push to `main` and every pull request.

## Release

1. Bump `version` in `.claude-plugin/plugin.json`, or installed copies never update.
2. Add the changes to `CHANGELOG.md`.
3. Push and wait for the Validate workflow to pass.
4. Tag `vX.Y.Z` and create a GitHub release.
