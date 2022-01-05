<script lang="ts">
	import SelectBox from './_SelectBox.svelte';
	const labels = [
		{
			id: 'E',
			label: 'Extraction'
		},
		{
			id: 'F',
			label: 'Filling'
		},
		{
			id: 'EN',
			label: 'Endodontic Treatment'
		},
		{
			id: 'P',
			label: 'Periodontal Treatment'
		},
		{
			id: 'PT',
			label: 'Prosthodontic Treatment'
		}
	];
</script>

<SelectBox on:change options={labels} />
