<script>
	export let key = '';
	export let value = '';
	import { _ } from 'svelte-i18n';
</script>

<tr>
	<td class="text-blue-800 text-right p-2">{$_(key)}</td>
	<td class="p-2">{value}</td>
</tr>
