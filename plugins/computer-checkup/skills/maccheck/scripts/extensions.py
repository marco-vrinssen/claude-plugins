#!/usr/bin/env python3
"""List browser extensions on macOS as tab-separated rows: browser, profile, name, version, id, all_sites."""

import glob
import json
import os
import plistlib

HOME = os.path.expanduser("~")
CHROMIUM = {
    "Chrome": "Google/Chrome",
    "Edge": "Microsoft Edge",
    "Brave": "BraveSoftware/Brave-Browser",
    "Arc": "Arc/User Data",
    "Vivaldi": "Vivaldi",
    "Chromium": "Chromium",
}


def all_sites(patterns):
    for p in patterns:
        if not isinstance(p, str):
            continue
        if p == "<all_urls>" or ("://" in p and p.split("://", 1)[1].split("/", 1)[0] == "*"):
            return True
    return False


def chromium():
    for browser, folder in CHROMIUM.items():
        for ext_root in sorted(glob.glob(os.path.join(HOME, "Library/Application Support", folder, "*", "Extensions"))):
            profile = os.path.basename(os.path.dirname(ext_root))
            for ext_id in sorted(os.listdir(ext_root)):
                manifests = glob.glob(os.path.join(ext_root, ext_id, "*", "manifest.json"))
                if not manifests:
                    continue
                manifest = max(manifests, key=os.path.getmtime)
                try:
                    with open(manifest, encoding="utf-8-sig") as f:
                        m = json.load(f)
                except (OSError, ValueError):
                    continue
                name = m.get("name", "")

                # Store listings localize names as __MSG_key__, resolved from the extension's _locales folder.
                if name.startswith("__MSG_"):
                    key = name[6:-2].lower()
                    for loc in (m.get("default_locale"), "en", "en_US"):
                        try:
                            with open(os.path.join(os.path.dirname(manifest), "_locales", loc or "", "messages.json"), encoding="utf-8-sig") as f:
                                name = {k.lower(): v for k, v in json.load(f).items()}[key]["message"]
                            break
                        except (OSError, ValueError, KeyError, TypeError):
                            continue
                patterns = m.get("host_permissions", []) + m.get("permissions", [])
                patterns += [p for c in m.get("content_scripts", []) for p in c.get("matches", [])]
                yield browser, profile, name, m.get("version", ""), ext_id, all_sites(patterns)


def firefox():
    for path in sorted(glob.glob(os.path.join(HOME, "Library/Application Support/Firefox/Profiles/*/extensions.json"))):
        try:
            with open(path, encoding="utf-8") as f:
                addons = json.load(f).get("addons", [])
        except (OSError, ValueError):
            continue

        # Built-in Firefox add-ons live outside the profile, so only app-profile ones were installed by the user.
        for a in addons:
            if a.get("type") != "extension" or a.get("location") != "app-profile":
                continue
            origins = (a.get("userPermissions") or {}).get("origins", [])
            name = (a.get("defaultLocale") or {}).get("name", "")
            yield "Firefox", os.path.basename(os.path.dirname(path)), name, a.get("version", ""), a.get("id", ""), all_sites(origins)


def safari():
    apps = glob.glob("/Applications/*.app") + glob.glob(os.path.join(HOME, "Applications/*.app"))
    for app in sorted(apps):
        for appex in sorted(glob.glob(os.path.join(app, "Contents/PlugIns/*.appex"))):
            try:
                with open(os.path.join(appex, "Contents/Info.plist"), "rb") as f:
                    info = plistlib.load(f)
            except (OSError, ValueError):
                continue
            point = info.get("NSExtension", {}).get("NSExtensionPointIdentifier", "")
            if not point.startswith("com.apple.Safari"):
                continue
            name = info.get("CFBundleDisplayName") or info.get("CFBundleName", "")

            # Safari keeps site access in its own settings, so it stays unknown here.
            yield "Safari", os.path.basename(app), name, info.get("CFBundleShortVersionString", ""), info.get("CFBundleIdentifier", ""), None


def main():
    print("browser\tprofile\tname\tversion\tid\tall_sites")
    for *cols, wide in [*chromium(), *firefox(), *safari()]:
        print("\t".join([*map(str, cols), "unknown" if wide is None else "yes" if wide else "no"]))


if __name__ == "__main__":
    main()
