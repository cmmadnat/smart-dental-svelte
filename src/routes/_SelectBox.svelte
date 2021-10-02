<script lang='ts'>

	export let options : {id:string, label:string}[] = []
	export let label:string=''
	
	export let value:string = ''

</script>

<label for={label}>
	{label}
</label>
<div class='mt-2 mb-3'>
		<select
			class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
			bind:value
		>
			{#each options as e}
				<option value={e.id}>{e.label}</option>
			{/each}
		</select>
</div>
