<script lang="ts">
	export let name: string;
	export let label: string;
	let show = false;
</script>

<div class="flex items-center gap-1">
	<input
		type="checkbox"
		id={name}
		on:change={(e) => {
			// eslint-disable-next-line
			//@ts-ignore
			show = e.target.checked;
		}}
	/>
	<label for={name}>{label}</label>
	{#if show}
		<input type="text" name="" id="" class="w-[160px]" />
	{/if}
</div>
