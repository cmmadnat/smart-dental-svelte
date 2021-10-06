<script lang="ts">
	interface Account {
		firstName: string;
		lastName: string;
		age: number;
		citizenID: string;
	}
	import { _ } from 'svelte-i18n';
	import Header from './_Navigation.svelte';
	import LanguageSetting from './_SetLanguage.svelte';

	import SearchUser from './_SearchUser.svelte';

	let fakeAccount: Account[] = [];
	const random = Math.random();
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
		<h1 class="text-2xl bold">{$_('findPatient')}</h1>
		<LanguageSetting />
	</div>
	<hr />
	<div class=" p-4">
		<SearchUser />
	</div>
	<table class="table-auto w-full border-2 ">
		<thead>
			<tr class="bg-blue-50">
				<th class="p-2 border-2">#</th>
				<th class="p-2 border-2">{$_('firstName')}</th>
				<th class="p-2 border-2">{$_('lastName')}</th>
				<th class="p-2 border-2">{$_('age')}</th>
				<th class="p-2 border-2">{$_('citizenID')}</th>
			</tr>
		</thead>
		<tbody>
			{#each fakeAccount as f, i}
				<tr class="text-left hover:bg-blue-50">
					<th class="border-2 p-2 text-center">{i + 1}</th>
					<th class="border-2 p-2"><a href="/patient/i">{f.firstName}</a> </th>
					<th class="border-2 p-2">{f.lastName}</th>
					<th class="border-2 text-center p-2">{f.age}</th>
					<th class="border-2 p-2">{f.citizenID}</th>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
