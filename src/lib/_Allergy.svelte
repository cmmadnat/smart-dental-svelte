<script lang="ts">
	import { _ } from 'svelte-i18n';
	import superagent from 'superagent';
	import MultiSelectBox from './_MultiSelectBox.svelte';
	import request from 'superagent';
	import { onMount } from 'svelte';
	export let id: string;
	const loadOptions = (filterText: string) => {
		return superagent
			.post('/service/search_drug')
			.send({ limit: 30, query: filterText })
			.then((data) => data.body);
	};
	let value: { name: string; id: string }[];
	onMount(() => {
		request
			.post('/service/get_allergies')
			.send({ id })
			.then((data) => data.body)
			.then((data) => {
				value = data;
			});
		// .then((data) => console.log(data));
	});
</script>

<div class="flex flex-row p-2 items-center bg-rose-400 rounded-sm">
	<span class="mr-2 text-white">
		{$_('allergy')} :
	</span>

	<MultiSelectBox
		{loadOptions}
		bind:value
		on:change={async (e) => {
			await request.post('/service/save_allergies').send({ id, allergies: e.detail });
		}}
	/>
</div>
