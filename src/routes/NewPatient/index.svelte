<script>
	import { _ } from 'svelte-i18n';
	import Header from '../_Navigation.svelte';
	import LanguageSetting from '../_SetLanguage.svelte';
	import Menu from '../_menu.svelte';
	import PersonalInfo from './_PersonalInfo.svelte';
	import AddressInfo from './_AddressInfo.svelte';
	import FamilyInfo from './_FamilyInfo.svelte';
</script>

<Header />
<div class="lg:container mx-auto bg-white p-2 rounded-lg shadow-lg">
	<div class="flex justify-between">
		<h1 class="text-2xl bold">{$_('addPatient')}</h1>
		<LanguageSetting />
	</div>
	<hr />

	<div class="mt-2 flex">
		<div class="md:w-1/3">
			<Menu />
		</div>
		<div class="md:w-2/3 ">
			<PersonalInfo />
			<AddressInfo />
			<FamilyInfo />
		</div>
	</div>
</div>
