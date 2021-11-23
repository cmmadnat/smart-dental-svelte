<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';
	export const load = async ({ fetch, page }: LoadInput): Promise<LoadOutput> => {
		const { id } = page.params;
		const user = await fetch('get-user', {
			method: 'post',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ id })
		}).then((data) => data.json());
		return {
			props: { id, user: user ? user.user : null }
		};
	};
</script>

<script lang="ts">
	import type { AppUser } from '$lib/entity/AppUser';
	import { _ } from 'svelte-i18n';
	import Header from '../_Navigation.svelte';
	import LanguageSetting from '$lib/_SetLanguage.svelte';
	import Menu from '../_menu.svelte';
	import PersonalInfo from './_PersonalInfo.svelte';
	import AddressInfo from './_AddressInfo.svelte';
	import FamilyInfo from './_FamilyInfo.svelte';
	export let user: AppUser;
	$: firstName = user.firstName;
	$: lastName = user.lastName;
	$: title = user.title.code;
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
			<PersonalInfo {firstName} {title} {lastName} />
			<AddressInfo />
			<FamilyInfo />
		</div>
	</div>
</div>
