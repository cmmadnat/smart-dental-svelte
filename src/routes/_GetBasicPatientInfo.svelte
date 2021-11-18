<script>
	import { _ } from 'svelte-i18n';
	import TextBox from '$lib/_TextBox.svelte';
	import Button from '$lib/_Button.svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';
	import DateInput from '$lib/_DateInput.svelte';
	const dispatch = createEventDispatcher();
	export let firstName = '';
	export let lastName = '';
	export let gender = 'm';
	export let birthday = new Date();
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
		{$_('step')} <span class="text-blue-600">2</span>
		{$_('of')} <span class="text-blue-600">3</span>
	</p>
	<hr />
	<TextBox label={$_('firstName')} bind:value={firstName} />
	<TextBox label={$_('lastName')} bind:value={lastName} />
	<p class="my-2">
		<input type="radio" bind:group={gender} value="m" id="male" />
		<label for="male">{$_('male')}</label>
		<input type="radio" bind:group={gender} value="f" id="female" />
		<label for="female"> {$_('female')}</label>
	</p>
	<div class="my-2">
		{$_('birthday')}
		<div class="mt-2 mb-3">
			<DateInput bind:date={birthday} />
		</div>
	</div>
	{#if error != ''}
		<p>
			<span class="text-red-400 bold">{error}</span>
		</p>
	{/if}
	<Button on:click={check}>{$_('next')}</Button>
</div>
