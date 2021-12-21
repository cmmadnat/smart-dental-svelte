<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Select from 'svelte-select';
	import superagent from 'superagent';

	const dispatch = createEventDispatcher();

	const optionIdentifier = 'id';
	const getOptionLabel = (option) => option.name;
	const getSelectionLabel = (option) => option.name;
	let value = [];

	function loadOptions(filterText) {
		return superagent
			.post('/service/search_drug')
			.send({ limit: 30, query: filterText })
			.then((data) => data.body);
	}
</script>

<div class="mt-2 mb-3">
	<Select
		bind:value
		{loadOptions}
		{optionIdentifier}
		{getSelectionLabel}
		{getOptionLabel}
		isMulti={true}
		on:select={() => {
			dispatch('change', value);
		}}
	/>

	<!-- <select
		class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
		bind:value
		on:change={change}
	>
		{#each options as e}
			<option value={e.id}>{e.label}</option>
		{/each}
	</select> -->
</div>
