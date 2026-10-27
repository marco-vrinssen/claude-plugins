# Changelog

## 1.1.1 (2026-10-22)

- The interface number comes from the build in the branch's `version.txt`, because Blizzard's own TOCs carry none.
- The secret value rules name every tag in the current API docs, including aspects, `ConstSecretAccessor` and `ReturnsNeverSecret`.
- `wow-source.sh` labels WeakAuras and ForeverAuras output as a commit, not a build.
- The import script fetches LibDeflate from its `main` branch.
- The WeakAuras authoring facts are rechecked against 5.22.1.

## 1.1.0 (2026-10-22)

- WoW Forever: builds and checks auras for ForeverAuras, the WeakAuras fork for that client. The import script finds a local ForeverAuras install, and `wow-source.sh fa` fetches its source.
- The skill names the triggers ForeverAuras can still run in combat on Forever.
- The import script fails when an aura's `internalVersion` is missing or newer than the local install's.

## 1.0.0 (2026-10-08)

- First release. World of Warcraft addon and WeakAura development. Verifies every API against the matching flavor branch of Blizzard's UI source, covers Midnight secret values, and builds ready-to-paste WeakAura import strings.
