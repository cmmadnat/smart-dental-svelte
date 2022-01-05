<script lang="ts">
	import SelectBox from './_SelectBox.svelte';
	const labels = [
		{
			id: 'C',
			label: 'Dental Caries'
		},
		{
			id: 'P',
			label: 'Periodontal Disease'
		},
		{
			id: 'M',
			label: 'Missing Tooth'
		},
		{
			id: 'Ex',
			label: 'Extracted Tooth'
		},
		{
			id: 'I',
			label: 'Impacted/embededtooth'
		},
		{
			id: 'PE',
			label: 'Partial Erupted tooth'
		}
	];
</script>

<SelectBox options={labels} on:change />
