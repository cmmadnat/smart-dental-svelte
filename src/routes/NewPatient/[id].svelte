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
	//basic info
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
	let religion = user.appUserInfo.religion ? user.appUserInfo.religion.code + '' : '';
	let nationality = user.appUserInfo.nationality;
	let occupation = user.appUserInfo.occupation ? user.appUserInfo.occupation.name : '';
	let organization = user.appUserInfo.organization;
	let expireDate = user.appUserInfo.expireDate;
	// address
	let addressType = user.appUserInfo.address ? user.appUserInfo.address.addressType + '' : '';
	let emergencyAddressType = user.appUserInfo.emergencyAddress
		? user.appUserInfo.emergencyAddress.addressType + ''
		: '';

	let addressLineOne = user.appUserInfo.address ? user.appUserInfo.address.line1 : '';
	let emergencyAddressLineOne = user.appUserInfo.emergencyAddress
		? user.appUserInfo.emergencyAddress.line1
		: '';

	let subdistrict = user.appUserInfo.address ? user.appUserInfo.address.subdistrict : '';
	let postalCode = user.appUserInfo.address ? user.appUserInfo.address.postalCode : '';
	let emergencySubdistrict = user.appUserInfo.emergencyAddress
		? user.appUserInfo.emergencyAddress.subdistrict
		: '';
	let emergencyPostalCode = user.appUserInfo.emergencyAddress
		? user.appUserInfo.emergencyAddress.postalCode
		: '';
	let emergencyContact = user.appUserInfo.emergencyName;
	let emergencyRelationship = user.appUserInfo.emergencyRelationship;
	let homePhone = user.appUserInfo.homePhone;
	let workPhone = user.appUserInfo.workPhone;

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
				idType,
				gender,
				birthday: birthday.toUTCString(),
				maritalStatus,
				religion,
				nationality,
				occupation,
				organization,
				expireDate: expireDate.toUTCString(),
				// address
				addressType,
				emergencyAddressType,
				addressLineOne,
				emergencyAddressLineOne,
				subdistrict,
				postalCode,
				//emergency
				emergencySubdistrict,
				emergencyPostalCode,
				// contact
				emergencyContact,
				emergencyRelationship,
				homePhone,
				workPhone
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
		gender = user.appUserInfo.gender;
		birthday = user.appUserInfo.birthday;
		maritalStatus = user.appUserInfo.maritalStatus;
		religion = user.appUserInfo.religion.code + '';
		nationality = user.appUserInfo.nationality;
		occupation = user.appUserInfo.occupation ? user.appUserInfo.occupation.name : '';
		organization = user.appUserInfo.organization;
		expireDate = user.appUserInfo.expireDate;
		//address type
		addressType = user.appUserInfo.address ? user.appUserInfo.address.addressType + '' : '';
		emergencyAddressType = user.appUserInfo.emergencyAddress
			? user.appUserInfo.emergencyAddress.addressType + ''
			: '';

		subdistrict = user.appUserInfo.address ? user.appUserInfo.address.subdistrict + '' : '';
		postalCode = user.appUserInfo.address ? user.appUserInfo.address.postalCode + '' : '';
		emergencySubdistrict = user.appUserInfo.emergencyAddress
			? user.appUserInfo.emergencyAddress.subdistrict
			: '';
		emergencyPostalCode = user.appUserInfo.emergencyAddress
			? user.appUserInfo.emergencyAddress.postalCode
			: '';
		emergencyContact = user.appUserInfo.emergencyName;
		emergencyRelationship = user.appUserInfo.emergencyRelationship;
		homePhone = user.appUserInfo.homePhone;
		workPhone = user.appUserInfo.workPhone;
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
				bind:idType
				bind:firstName
				bind:title
				bind:lastName
				bind:birthday
				bind:maritalStatus
				bind:nationality
				bind:religion
				bind:organization
				bind:occupation
				bind:expireDate
			/>
			<AddressInfo
				bind:addressType
				bind:emergencyAddressType
				bind:addressLineOne
				bind:emergencyAddressLineOne
				bind:subdistrict
				bind:postalCode
				bind:emergencySubdistrict
				bind:emergencyPostalCode
				bind:emergencyContact
				bind:emergencyRelationship
				bind:homePhone
				bind:workPhone
			/>
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
