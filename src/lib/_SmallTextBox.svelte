<script lang="ts">
	import { _ } from 'svelte-i18n';
	export let label: string;
	export let value = '';
</script>

<label class="text-sm" for={label}>
	{label}
</label>

<!-- Regular Input -->
<div class="relative flex w-full flex-wrap items-stretch mb-3">
	<input
		bind:value
		id={label}
		type="text"
		placeholder={$_('enter') + ' ' + label + '...'}
		class="p-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
	/>
</div>
