<script>
	import { _ } from 'svelte-i18n';
	let step = 1;
	import TextBox from './_TextBox.svelte';
	import Button from './_Button.svelte';
</script>

<div class="w-1/3 bg-pink-100 p-3">
	<p class="text-2xl">
		{$_('step')} <span class="text-blue-600">{step}</span>
		{$_('of')} <span class="text-blue-600">3</span>
	</p>
	<hr />
	<TextBox label={$_('citizenID')} />
	<p class="my-2">{$_('checkDuplicateCitizenID')}</p>
	<Button>{$_('checkDuplicateCitizenIDandProceed')}</Button>
</div>
