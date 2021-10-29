<script>
	import SelectBox from './_SelectBox.svelte';
	import TextBox from './_TextBox.svelte';
	import { _ } from 'svelte-i18n';
	export let gender = 'm';
	export let titles = [];
</script>

<div class="w-1/2">
	<div class="text-center py-5">
		<p class="my-2">
			<span>{$_('gender')}</span>

			<input type="radio" bind:group={gender} value="m" id="male" />
			<label for="male">{$_('male')}</label>
			<input type="radio" bind:group={gender} value="f" id="female" />
			<label for="female"> {$_('female')}</label>
		</p>
	</div>
</div>
<div class=" w-1/2 p-2">
	<SelectBox label={$_('title')} options={titles} />
</div>
<div class=" w-1/2 p-2">
	<TextBox label={$_('firstName')} />
</div>
<div class=" w-1/2 p-2">
	<TextBox label={$_('lastName')} />
</div>
<div class=" w-1/2 p-2">
	<SelectBox
		label={$_('IDCard')}
		options={[
			{ label: 'บัตรประชาชน', id: '1' },
			{ label: 'หนังสือเดินทาง', id: '2' }
		]}
	/>
</div>
<div class="p-2 w-1/2">
	<TextBox label={$_('cardNumber')} />
</div>
<div class="p-2 w-1/2">
	<TextBox label={$_('phone')} />
</div>
<div class="p-2 w-1/2">
	<TextBox label={$_('email')} />
</div>
