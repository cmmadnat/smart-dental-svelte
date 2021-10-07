<script lang="ts">
	import dayjs from 'dayjs'
	import LocalizedFormat from 'dayjs/plugin/localizedFormat'
	import {_}from'svelte-i18n'
	import ButtonRed from '../_ButtonRed.svelte'
	import ButtonGreen from '../_ButtonGreen.svelte'

	dayjs.extend(LocalizedFormat)
	// eslint-ignore-line
	export let citizenID = '';
</script>

<h1 class="text-2xl my-2 bold text-blue-800">{$_('schedule')}</h1>
<hr/>
<div class='my-2'>
<ButtonGreen><i class='lni lni-plus'></i> {$_('addSchedule')}</ButtonGreen>
</div>
{#each [1,2,3,4,5] as i}
<div class='mb-1 flex justify-between bg-yellow-100 p-3 rounded-md'>
	<div>{dayjs().format('LLL')} </div>
	<div>ขูดหินปูน</div>
	<div><ButtonRed size='small'><i class='lni lni-trash-can'></i> {$_('remove')} </ButtonRed></div>
</div>
{/each}
