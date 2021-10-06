<script lang="ts">
	interface Account {
		firstName: string;
		lastName: string;
		age: number;
		citizenID: string;
	}
	import { _ } from 'svelte-i18n';
	import Header from '../_Navigation.svelte';
	import LanguageSetting from '../_SetLanguage.svelte';

	let fakeAccount: Account[] = [];

	for (let i = 0; i < 20; i++) {
		fakeAccount = [
			...fakeAccount,
			{
				firstName: 'FakeFirstName' + i,
				lastName: 'fakeLastName' + i,
				age: Math.floor((Math.random() * 100) % 60),
				citizenID: '' + Math.floor(Math.random() * Math.pow(10, 13))
			}
		];
	}
</script>

<Header />
<div class="container mx-auto bg-white p-2 rounded-lg shadow-lg">
	<div class="flex justify-between">
		<h1 class="text-2xl bold">{$_('patientDetail')}</h1>
		<LanguageSetting />
	</div>
	<hr />
</div>
