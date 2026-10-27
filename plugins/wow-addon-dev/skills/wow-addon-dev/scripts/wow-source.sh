#!/bin/sh
# Print the local path and build of one flavor branch of a trusted WoW source repo,
# cloning it on first use and refreshing it at most once a day.
# Usage: wow-source.sh <ui|res|wa|fa> <branch>

set -e

usage="usage: wow-source.sh <ui|res|wa|fa> <branch>"

# The allowlist doubles as the trust boundary, no other repo is ever fetched
# Gethe and Ketho name each commit after its game build, the addon repos do not
case "$1" in
    ui) repo=Gethe/wow-ui-source label=build ;;
    res) repo=Ketho/BlizzardInterfaceResources label=build ;;
    wa) repo=WeakAuras/WeakAuras2 label=commit ;;
    fa) repo=neroxrw/foreverauras label=commit ;;
    *) echo "$usage" >&2; exit 1 ;;
esac

branch=${2:?$usage}
dir="${XDG_CACHE_HOME:-$HOME/.cache}/wow-addon-dev/$1/$branch"
stamp="$dir/.git/FETCH_HEAD"

if [ ! -d "$dir/.git" ]; then
    git clone -q --depth 1 --single-branch -b "$branch" "https://github.com/$repo.git" "$dir"
    touch "$stamp"
elif [ -n "$(find "$stamp" -mtime +0 2>/dev/null)" ] || [ ! -f "$stamp" ]; then
    git -C "$dir" fetch -q --depth 1 origin "$branch" && git -C "$dir" reset -q --hard FETCH_HEAD ||
        echo "refresh failed, using the cached copy" >&2
fi

echo "$dir"
git -C "$dir" log -1 --format="$label: %s (%cs)"
