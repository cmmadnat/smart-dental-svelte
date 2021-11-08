<script lang="ts">
	import SmallTextBox from '../_SmallTextBox.svelte';
	import { _ } from 'svelte-i18n';
</script>

<div class="bg-blue-200">
	<h1 class="bold text-2xl w-full p-2">{$_('familyInfo')}</h1>
</div>

<div class="flex flex-row flex-wrap">
	<div class="w-1/2 px-2">
		<SmallTextBox label={$_('fatherName')} />
	</div>
	<div class="w-1/2 px-2">
		<SmallTextBox label={$_('lastName')} />
	</div>
	<div class="w-1/2 px-2">
		<SmallTextBox label={$_('motherName')} />
	</div>
	<div class="w-1/2 px-2">
		<SmallTextBox label={$_('lastName')} />
	</div>
	<div class="w-1/2 px-2">
		<SmallTextBox label={$_('sprouseName')} />
	</div>
	<div class="w-1/2 px-2">
		<SmallTextBox label={$_('lastName')} />
	</div>
</div>
