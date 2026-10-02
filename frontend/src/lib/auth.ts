"use client";

import { useSyncExternalStore } from "react";

// TODO: replace with the real session once the auth API exists.
// Only the internals of this file should change — components read `useAuth()`.
const STORAGE_KEY = "miyao-auth";

let listeners: (() => void)[] = [];

function read() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function write(value: boolean) {
  try {
    if (value) localStorage.setItem(STORAGE_KEY, "1");
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    // private mode — the session just won't persist
  }
  listeners.forEach((notify) => notify());
}

function subscribe(notify: () => void) {
  listeners.push(notify);
  window.addEventListener("storage", notify);
  return () => {
    listeners = listeners.filter((l) => l !== notify);
    window.removeEventListener("storage", notify);
  };
}

export function useAuth() {
  const isLoggedIn = useSyncExternalStore(subscribe, read, () => false);

  return {
    isLoggedIn,
    login: () => write(true),
    logout: () => write(false),
  };
}
