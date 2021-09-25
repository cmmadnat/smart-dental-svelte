<script>
	import TextBox from './_TextBox.svelte';
	import { _ } from 'svelte-i18n';
	import Header from './_Navigation.svelte';
	import LanguageSetting from './_SetLanguage.svelte';
	import Button from './_Button.svelte';
	import CheckCitizenID from './_CheckCitizenID.svelte';
	let step = 1;
</script>

<Header />
<div class="container mx-auto bg-white p-2 rounded-lg shadow-lg">
	<div class="flex justify-between">
		<h1 class="text-2xl bold">{$_('addPatient')}</h1>
		<LanguageSetting />
	</div>
	<hr />
	<div class="py-3 flex justify-center">
		<CheckCitizenID />
	</div>
</div>
