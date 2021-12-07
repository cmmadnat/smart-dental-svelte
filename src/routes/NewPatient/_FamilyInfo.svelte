<script lang="ts">
	import SmallTextBox from '$lib/_SmallTextBox.svelte';
	import { _ } from 'svelte-i18n';

	export let fatherFirstname;
	export let fatherLastName;
	export let motherFirstname;
	export let motherLastName;
	export let sprouseFirstname;
	export let sprouseLastName;
</script>

<div class="bg-blue-200">
	<h1 class="bold text-2xl w-full p-2">{$_('familyInfo')}</h1>
</div>

<div class="flex flex-row flex-wrap">
	<div class="w-1/2 px-2">
		<SmallTextBox bind:value={fatherFirstname} label={$_('fatherName')} />
	</div>
	<div class="w-1/2 px-2">
		<SmallTextBox bind:value={fatherLastName} label={$_('lastName')} />
	</div>
	<div class="w-1/2 px-2">
		<SmallTextBox bind:value={motherFirstname} label={$_('motherName')} />
	</div>
	<div class="w-1/2 px-2">
		<SmallTextBox bind:value={motherLastName} label={$_('lastName')} />
	</div>
	<div class="w-1/2 px-2">
		<SmallTextBox bind:value={sprouseFirstname} label={$_('sprouseName')} />
	</div>
	<div class="w-1/2 px-2">
		<SmallTextBox bind:value={sprouseLastName} label={$_('lastName')} />
	</div>
</div>
