<script context="module" lang="ts">
	import '../i18n';
	import { waitLocale } from 'svelte-i18n';
	import type { LoadOutput } from '@sveltejs/kit';

	export async function load(): Promise<LoadOutput> {
		// awaits for the loading of the 'th' and 'en' dictionaries
		await waitLocale();
		return {};
	}
</script>

<script>
	import '../app.postcss';
</script>

<slot />
