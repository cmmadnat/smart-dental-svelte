<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Select from 'svelte-select';
	import Item from './BeerItem.svelte';

	const dispatch = createEventDispatcher();

	const optionIdentifier = 'id';
	const getOptionLabel = (option) => option.name;
	const getSelectionLabel = (option) => option.name;

	function loadOptions(filterText) {
		filterText = filterText ? filterText.replace(' ', '_') : '';

		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open('GET', `https://api.punkapi.com/v2/beers?beer_name=${filterText}`);
			xhr.send();

			xhr.onload = () => {
				if (xhr.status >= 200 && xhr.status < 300) {
					setTimeout(
						resolve(
							JSON.parse(xhr.response).sort((a, b) => {
								if (a.name > b.name) return 1;
								if (a.name < b.name) return -1;
							})
						),
						2000
					);
				} else {
					reject();
				}
			};
		});
	}
</script>

<div class="mt-2 mb-3">
	<Select
		{loadOptions}
		{optionIdentifier}
		{getSelectionLabel}
		{getOptionLabel}
		{Item}
		isMulti={true}
		on:select={() => {
			dispatch('change');
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
