import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ThemeLabel = "system" | "light" | "dark";

function migrateLegacyThemeKey() {
  if (typeof window === "undefined") {
    return;
  }
  try {
    const raw = window.localStorage.getItem("theme");
    if (raw === "auto") {
      window.localStorage.setItem("theme", "system");
    }
  } catch {
    // ignore storage errors
  }
}

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    migrateLegacyThemeKey();
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof document === "undefined") {
      return;
    }
    const mode = theme ?? "system";
    if (mode === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", mode);
    }
  }, [mounted, theme]);

  if (!mounted) {
    return (
      <span className="inline-block min-w-[4.5rem] rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-center text-sm font-semibold text-[var(--sea-ink)] opacity-60">
        …
      </span>
    );
  }

  const mode = (
    theme === "light" || theme === "dark" || theme === "system"
      ? theme
      : "system"
  ) satisfies ThemeLabel;

  function toggleMode() {
    const order: ThemeLabel[] = ["system", "light", "dark"];
    const index = order.indexOf(mode);
    const next = order[(index + 1) % order.length];
    setTheme(next);
  }

  const label =
    mode === "system"
      ? `Theme: system (${resolvedTheme ?? "…"}). Click to use light mode.`
      : `Theme: ${mode}. Click to switch mode.`;

  const short = mode === "system" ? "Auto" : mode === "dark" ? "Dark" : "Light";

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={label}
      title={label}
      className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-sm font-semibold text-[var(--sea-ink)] shadow-[0_8px_22px_rgba(30,90,72,0.08)] transition hover:-translate-y-0.5"
    >
      {short}
    </button>
  );
}
