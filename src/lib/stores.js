import { writable } from 'svelte/store';
import { supabase } from './db';
import edops from './editor/data';
export const user = writable(supabase.auth.user() || false);
export const profil = writable(null);
export const jEditout = writable(null);

export const pageData = writable(null);
function toggleSidebar() {
	const { subscribe, set, update } = writable(false);
	return {
		subscribe,
		toggle: () => update(n => (n = !n)),
		show: () => set(true),
		reset: () => set(false)
	};
}

export const isOpen = toggleSidebar();
export const editor_ops = writable(edops[1]);
export const editor_new = writable({});
export const editor_out = writable(null);
export const editor_sel = writable(0);

