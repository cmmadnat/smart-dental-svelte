<script context="module" lang="ts">
	import '../i18n';
	import { waitLocale, locale } from 'svelte-i18n';

	export async function load({ session }) {
		// awaits for the loading of the 'th' and 'en' dictionaries
		await waitLocale();
		return {};
	}
</script>

<script>
	import '../app.postcss';
</script>

<slot />
