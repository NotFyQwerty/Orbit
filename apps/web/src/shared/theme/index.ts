export type ThemePreference = "system" | "light" | "dark";

const STORAGE_KEY = "orbit-theme";

export function getThemePreference(): ThemePreference {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "system" || saved === "light" || saved === "dark")
      return saved;
  } catch {
    // Storage can be blocked (private mode), fall through to the default
  }
  return "system";
}

// Turns the user's choice into a concrete theme
function resolveTheme(pref: ThemePreference): "light" | "dark" {
  if (pref !== "system") return pref;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(pref: ThemePreference) {
  document.documentElement.dataset.theme = resolveTheme(pref);
}

// Saves the choice (not the resolved theme) so "system" stays "system"
export function setThemePreference(pref: ThemePreference) {
  try {
    localStorage.setItem(STORAGE_KEY, pref);
  } catch {
    // Ignore: the theme still works for the current session
  }
  applyTheme(pref);
}

export function initTheme() {
  applyTheme(getThemePreference());

  // Follow the OS switching between light and dark, but only while the choice is "system"
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (getThemePreference() === "system") applyTheme("system");
    });
}
