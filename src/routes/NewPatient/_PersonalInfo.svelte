<script lang="ts">
	import { _ } from 'svelte-i18n';
	import SignUpStep1 from '../_sign-up-step1.svelte';
	import Papa from 'papaparse';
	import { onMount } from 'svelte';
	let titles = [];
	let gender = 'm';
	onMount(() => {
		fetch('/titles.csv')
			.then((data) => data.text())
			.then((data) => Papa.parse(data, { header: true }).data)
			.then((data) => {
				console.log(data);
				titles = data.map((it) => ({ id: it.CODE, label: it.TITLE }));
			});
	});
</script>

<div class="bg-blue-200">
	<h1 class="bold text-2xl w-full p-2">{$_('personalInfo')}</h1>
</div>
<div class="flex flex-row flex-wrap">
	<SignUpStep1 {gender} {titles} />
</div>
