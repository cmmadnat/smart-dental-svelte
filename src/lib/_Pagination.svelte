<script>
	import { createEventDispatcher } from 'svelte';
	export let pages = 3;
	export let activePage = 1;
	$: pageInstance = Array.from({ length: pages }, (v, i) => i + 1);
	const dispatch = createEventDispatcher();
	const gotoPage = (targetPage) => {
		dispatch('selectPage', targetPage);
	};
	const goBackward = () => {
		if (activePage != 1) dispatch('selectPage', activePage - 1);
	};
	const goForward = () => {
		if (activePage != pages) dispatch('selectPage', activePage + 1);
	};
</script>

<div class="py-2">
	<nav class="block">
		<ul class="flex pl-0 rounded list-none flex-wrap">
			<li on:click={goBackward}>
				<a
					href="#pablo"
					class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-orange-500 bg-white text-orange-500"
				>
					<i class="lni lni-chevron-left -ml-px" />
				</a>
			</li>
			{#each pageInstance as p}
				<li
					on:click={() => {
						gotoPage(p);
					}}
				>
					<a
						href="#pablo"
						class={p == activePage
							? 'first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-orange-500 text-white bg-orange-500'
							: 'first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-orange-500 bg-white text-orange-500'}
					>
						{p}
					</a>
				</li>
			{/each}
			<li on:click={goForward}>
				<a
					href="#pablo"
					class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-orange-500 bg-white text-orange-500"
				>
					<!-- <i class="fas fa-chevron-right -mr-px" /> -->
					<i class="lni lni-chevron-right -mr-px" />
				</a>
			</li>
		</ul>
	</nav>
</div>
