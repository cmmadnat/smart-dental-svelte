<script lang="ts">
	export let size: 'small' | 'regular' | 'large' = 'small';
</script>

{#if size == 'small'}
	<button
		class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
		type="button"
	>
		<slot />
	</button>
{:else if size == 'regular'}
	<button
		class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
		type="button"
	>
		<slot />
	</button>
{:else}
	<button
		class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
		type="button"
	>
		<slot />
	</button>
{/if}
