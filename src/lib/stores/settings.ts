import { get, writable } from "svelte/store";

export const settingsStore = writable<Record<string, string>>({})
