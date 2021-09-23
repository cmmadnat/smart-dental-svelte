<script>
	import { _ } from 'svelte-i18n';
	import Header from './_Navigation.svelte';
	import LanguageSetting from './_SetLanguage.svelte';
</script>

<Header/>
<div class='container mx-auto bg-white p-2 rounded-lg shadow-lg'>
<div class='flex justify-between'>
	<h1 class='text-2xl bold'>{$_('appName')}</h1>
	<LanguageSetting/>
</div>
</div>
