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
	import request from 'superagent';
	import { _ } from 'svelte-i18n';
	import Header from '../_Navigation.svelte';
	import LanguageSetting from '$lib/_SetLanguage.svelte';
	import Menu from '../_menu.svelte';
	import SmallModal from '$lib/_SmallModal.svelte';
	import PersonalInfo from './_PersonalInfo.svelte';
	import AddressInfo from './_AddressInfo.svelte';
	import FamilyInfo from './_FamilyInfo.svelte';
	import ButtonGreen from '$lib/_ButtonGreen.svelte';
	import ButtonRed from '$lib/_ButtonRed.svelte';
	export let id = '';
	export let user: AppUser;
	let firstName = user.firstName;
	let lastName = user.lastName;
	let title = user.title.code;
	let idType = user.IDCard;
	let cardNumber = user.cardNumber;
	let mobile = user.mobile;
	let email = user.email;
	let gender = user.appUserInfo.gender;
	let birthday = user.appUserInfo.birthday;
	let maritalStatus = user.appUserInfo.maritalStatus;
	let religion = user.appUserInfo.religion.code + '';
	let nationality = user.appUserInfo.nationality;

	let showModal = false;
	const save = () => {
		request
			.post('/NewPatient/save-user')
			.send({
				id,
				firstName,
				lastName,
				cardNumber,
				mobile,
				email,
				title,
				gender,
				birthday: birthday.toUTCString(),
				maritalStatus,
				religion,
				nationality
			})
			.then(() => {
				showModal = true;
			});
	};
	const reset = () => {
		firstName = user.firstName;
		lastName = user.lastName;
		title = user.title.code;
		idType = user.IDCard;
		cardNumber = user.cardNumber;
		mobile = user.mobile;
		email = user.email;
		title = user.title.code;
		gender = user.appUserInfo.gender;
		birthday = user.appUserInfo.birthday;
		maritalStatus = user.appUserInfo.maritalStatus;
		religion = user.appUserInfo.religion.code;
		nationality = user.appUserInfo.nationality;
	};
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
		<div class="md:w-2/3 relative">
			<ButtonGreen on:click={save}>{$_('save')}</ButtonGreen>
			<ButtonRed on:click={reset}>{$_('reset')}</ButtonRed>
			<PersonalInfo
				bind:mobile
				bind:email
				bind:gender
				bind:cardNumber
				{idType}
				bind:firstName
				bind:title
				bind:lastName
				bind:birthday
				bind:maritalStatus
				bind:nationality
				bind:religion
			/>
			<AddressInfo />
			<FamilyInfo />
		</div>
	</div>
</div>
<SmallModal
	show={showModal}
	on:complete={() => {
		showModal = false;
	}}
	showClose={false}
	on:close={() => (showModal = false)}>{$_('updateSuccess')}</SmallModal
>
