<script>
	import { _ } from 'svelte-i18n';
	import Header from './_Navigation.svelte';
	import LanguageSetting from './_SetLanguage.svelte';
	import SearchUser from './_SearchUser.svelte';
	import SearchDoctor from './_SearchDoctor.svelte';

</script>

<Header/>
<div class='container mx-auto bg-white p-2 rounded-lg shadow-lg'>
<div class='flex justify-between'>
	<h1 class='text-2xl bold'>{$_('appName')}</h1>
	<LanguageSetting/>
</div>
<hr/>
<div class='mt-2 flex'>
  <div class='md:w-1/3 w-full'>
    <div>
      <SearchUser/>
    </div>
    <div class="mt-2">
      <SearchDoctor/>
    </div>
  </div>
</div>
</div>
