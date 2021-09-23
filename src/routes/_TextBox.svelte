<script lang="ts">
	import { _ } from 'svelte-i18n';
	export let label: string;
	export let name: string;
</script>

<label for={label}>
	{label}
</label>

<!-- Regular Input -->
<div class="relative flex w-full flex-wrap items-stretch mt-2 mb-3">
	<input
		id={label}
		type="text"
		name={name}
		placeholder={$_('enter') + ' ' + label + '...'}
		class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
	/>
</div>
