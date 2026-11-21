"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const storageKey = "portfolio-theme";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("portfolio-theme-change", onStoreChange);
  return () => window.removeEventListener("portfolio-theme-change", onStoreChange);
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, () => true);

  function toggleTheme() {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem(storageKey, nextIsDark ? "dark" : "light");
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="icon-button"
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      title={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
