<script>
	import { locale } from 'svelte-i18n';
	import { onMount } from 'svelte';

	onMount(() => {
		const lang = getCookie('lang');
		if (lang) $locale = lang;
	});
	const setCookie = (name, value, days = 7, path = '/') => {
		const expires = new Date(Date.now() + days * 864e5).toUTCString();
		document.cookie =
			name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path;
	};

	const getCookie = (name) => {
		return document.cookie.split('; ').reduce((r, v) => {
			const parts = v.split('=');
			return parts[0] === name ? decodeURIComponent(parts[1]) : r;
		}, '');
	};

	const deleteCookie = (name, path) => {
		setCookie(name, '', -1, path);
	};
</script>

<div class="flex text-gray-400">
	<div class="flex flex-row">
		<img class="w-6 mr-2" src="/th.svg" alt="" />
		<button
			on:click={() => {
				setCookie('lang', 'th');
				$locale = 'th';
			}}
		>
			ไทย
		</button>
	</div>

	<div class="mx-2">|</div>
	<div class="flex flex-row">
		<img class="w-6 mr-2" src="/us.svg" alt="" />
		<button
			on:click={() => {
				setCookie('lang', 'en');
				$locale = 'en';
			}}
		>
			English
		</button>
	</div>
</div>
