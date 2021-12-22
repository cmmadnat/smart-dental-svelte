<script lang="ts">
	export let currentTab = 0;
	export let tabNames: string[] = [];

	function toggleTabs(tabNumber) {
		currentTab = tabNumber;
	}
</script>

<div class="flex flex-wrap">
	<div class="w-full">
		<ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
			{#each tabNames as t, index}
				<li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
					<!-- svelte-ignore a11y-missing-attribute -->
					<a
						class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal {currentTab ===
						index
							? 'text-white bg-orange-600'
							: 'text-orange-600 bg-white'}"
						on:click={() => {
							toggleTabs(index);
						}}
					>
						{t}
					</a>
				</li>
			{/each}
		</ul>
		<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
			<div class="px-4 py-5 flex-auto">
				<slot />
			</div>
		</div>
	</div>
</div>
