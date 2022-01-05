<script lang="ts">
	import SelectBox from './_SelectBox.svelte';
	const labels = [
		{
			id: 'C',
			label: 'dental caries'
		},
		{
			id: 'P',
			label: 'periodontal disease'
		},
		{
			id: 'M',
			label: 'missing tooth'
		},
		{
			id: 'Ex',
			label: 'extracted tooth'
		},
		{
			id: 'I',
			label: 'impacted/embededtooth'
		},
		{
			id: 'PE',
			label: 'partial erupted tooth'
		}
	];
</script>

<SelectBox options={labels} on:change />
