<script>
	import { _ } from 'svelte-i18n';
	import TextBox from './_TextBox.svelte';
	import Button from './_Button.svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';
	import DateInput from './_DateInput.svelte';
	import CityPicker from './_CityPicker.svelte';
	const dispatch = createEventDispatcher();
	export let firstName = '';
	export let lastName = '';
	let error = '';
	const check = () => {
		dispatch('complete');
	};
</script>

<div
	class="w-1/3 bg-pink-100 p-3"
	in:fly={{ duration: 300, x: 100, opacity: 0.5, easing: quintOut }}
>
	<p class="text-2xl">
		{$_('step')} <span class="text-blue-600">3</span>
		{$_('of')} <span class="text-blue-600">3</span>
	</p>
	<hr />
	<TextBox label={$_('addressLineOne')} bind:value={firstName} />
	<CityPicker/>
	<Button on:click={check}>{$_('next')}</Button>
</div>
