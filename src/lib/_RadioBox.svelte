<script lang="ts">
	export let label: string;
	export let group: string;
	export let value: string | number | string[];
	export let id: string;
	export let name: string;
</script>

<label for={id}>
	<input type="radio" {name} bind:group {value} {id} />
	{label}</label
>
