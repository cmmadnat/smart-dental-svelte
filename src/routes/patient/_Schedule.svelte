<script lang="ts">
	import dayjs from 'dayjs';
	import LocalizedFormat from 'dayjs/plugin/localizedFormat.js';
	import { _ } from 'svelte-i18n';
	import ButtonRed from '$lib/_ButtonRed.svelte';
	import ButtonGreen from '$lib/_ButtonGreen.svelte';

	dayjs.extend(LocalizedFormat);
</script>

<h1 class="text-2xl my-2 bold text-blue-800">{$_('schedule')}</h1>
<hr />
<div class="my-2">
	<ButtonGreen><i class="lni lni-plus" /> {$_('addSchedule')}</ButtonGreen>
</div>
{#each [1, 2, 3, 4, 5] as i}
	<div class="mb-1 flex justify-between bg-yellow-100 p-3 rounded-md">
		<div>{dayjs().format('LLL')}</div>
		<div>ขูดหินปูน</div>
		<div><ButtonRed size="small"><i class="lni lni-trash-can" /> {$_('remove')}</ButtonRed></div>
	</div>
{/each}
