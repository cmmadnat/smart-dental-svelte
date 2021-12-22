<script>
	export let openTab;
	export let tabIndex;
</script>

<div class="tab-content tab-space">
	<div class={openTab === tabIndex ? 'block' : 'hidden'}>
		<slot />
	</div>
</div>
