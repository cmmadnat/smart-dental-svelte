<script lang="ts">
	import dayjs from 'dayjs';
	import LocalizedFormat from 'dayjs/plugin/localizedFormat';
	import { _ } from 'svelte-i18n';
	import ButtonGreen from '../_ButtonGreen.svelte';

	dayjs.extend(LocalizedFormat);
</script>

<h1 class="text-2xl my-2 bold text-blue-800">{$_('visits')}</h1>
<hr />

{#each [1, 2, 3, 4, 5] as i}
	<div class="mb-1 flex justify-between bg-rose-200 p-3 rounded-md">
		<div>{dayjs().format('LLL')}</div>
		<div>ขูดหินปูน</div>
		<div><ButtonGreen size="small"><i class="lni lni-list" /> {$_('view')}</ButtonGreen></div>
	</div>
{/each}
