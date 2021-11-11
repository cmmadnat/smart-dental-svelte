<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let size: 'small' | 'regular' | 'large' = 'small';
	const dispatch = createEventDispatcher();
	export let type = 'button';
	const click = (e) => {
		dispatch('click', e);
	};
</script>

{#if size == 'small'}
	<button
		on:click={click}
		class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
		{type}
	>
		<slot />
	</button>
{:else if size == 'regular'}
	<button
		on:click={click}
		class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
		{type}
	>
		<slot />
	</button>
{:else}
	<button
		on:click={click}
		class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
		{type}
	>
		<slot />
	</button>
{/if}
