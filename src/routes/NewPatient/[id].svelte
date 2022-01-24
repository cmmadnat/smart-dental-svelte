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
	import Header from '$lib/_Navigation.svelte';
	import LanguageSetting from '$lib/_SetLanguage.svelte';
	import Menu from '$lib/_menu.svelte';
	import SmallModal from '$lib/_SmallModal.svelte';
	import PersonalInfo from './_PersonalInfo.svelte';
	import AddressInfo from './_AddressInfo.svelte';
	import FamilyInfo from './_FamilyInfo.svelte';
	import ButtonGreen from '$lib/_ButtonGreen.svelte';
	import ButtonRed from '$lib/_ButtonRed.svelte';
	import { goto } from '$app/navigation';
	import ButtonBlue from '$lib/_ButtonBlue.svelte';
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
	let occupation = user.appUserInfo.occupation ? user.appUserInfo.occupation.thaiName : '';
	let organization = user.appUserInfo.organization;
	let expireDate = user.appUserInfo.expireDate;
	// address
	let addressType = user.appUserInfo.address ? user.appUserInfo.address.addressType + '' : '';
	let addressLineOne = user.appUserInfo.address ? user.appUserInfo.address.line1 : '';
	let subdistrict = user.appUserInfo.address ? user.appUserInfo.address.subdistrict : '';
	let postalCode = user.appUserInfo.address ? user.appUserInfo.address.postalCode : '';

	// emergency address
	let emergencyAddressType = user.appUserInfo.emergencyAddress
		? user.appUserInfo.emergencyAddress.addressType + ''
		: '';
	let emergencyAddressLineOne = user.appUserInfo.emergencyAddress
		? user.appUserInfo.emergencyAddress.line1
		: '';
	let emergencySubdistrict = user.appUserInfo.emergencyAddress
		? user.appUserInfo.emergencyAddress.subdistrict
		: '';
	let emergencyPostalCode = user.appUserInfo.emergencyAddress
		? user.appUserInfo.emergencyAddress.postalCode
		: '';

	//emergency contact
	let emergencyContact = user.appUserInfo.emergencyName;
	let emergencyRelationship = user.appUserInfo.emergencyRelationship;
	//phone
	let homePhone = user.appUserInfo.homePhone;
	let workPhone = user.appUserInfo.workPhone;
	// family
	let fatherFirstname = user.appUserInfo.fatherFamilyInfo
		? user.appUserInfo.fatherFamilyInfo.firstName
		: '';
	let fatherLastName = user.appUserInfo.fatherFamilyInfo
		? user.appUserInfo.fatherFamilyInfo.lastName
		: '';
	let motherFirstname = user.appUserInfo.motherFamilyInfo
		? user.appUserInfo.motherFamilyInfo.firstName
		: '';
	let motherLastName = user.appUserInfo.motherFamilyInfo
		? user.appUserInfo.motherFamilyInfo.lastName
		: '';
	let sprouseFirstname = user.appUserInfo.sprouseFamilyInfo
		? user.appUserInfo.sprouseFamilyInfo.firstName
		: '';
	let sprouseLastName = user.appUserInfo.sprouseFamilyInfo
		? user.appUserInfo.sprouseFamilyInfo.lastName
		: '';

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
				addressLineOne,
				subdistrict,
				postalCode,
				//emergency
				emergencyAddressType,
				emergencyAddressLineOne,
				emergencySubdistrict,
				emergencyPostalCode,
				// contact
				emergencyContact,
				emergencyRelationship,
				//phone
				homePhone,
				workPhone,
				// family
				fatherFirstname,
				fatherLastName,
				motherFirstname,
				motherLastName,
				sprouseFirstname,
				sprouseLastName
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
		occupation = user.appUserInfo.occupation ? user.appUserInfo.occupation.thaiName : '';
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

		//address
		addressType = user.appUserInfo.address ? user.appUserInfo.address.addressType + '' : '1';
		addressLineOne = user.appUserInfo.address ? user.appUserInfo.address.line1 : '';
		subdistrict = user.appUserInfo.address ? user.appUserInfo.address.subdistrict : '';
		postalCode = user.appUserInfo.address ? user.appUserInfo.address.postalCode : '';

		//family
		fatherFirstname = user.appUserInfo.fatherFamilyInfo.firstName;
		fatherLastName = user.appUserInfo.fatherFamilyInfo.lastName;
		motherFirstname = user.appUserInfo.motherFamilyInfo.firstName;
		motherLastName = user.appUserInfo.motherFamilyInfo.lastName;
		sprouseFirstname = user.appUserInfo.sprouseFamilyInfo.firstName;
		sprouseLastName = user.appUserInfo.sprouseFamilyInfo.lastName;

		//emergency address
		emergencyAddressType = user.appUserInfo.emergencyAddress
			? user.appUserInfo.emergencyAddress.addressType + ''
			: '1';
		emergencyAddressLineOne = user.appUserInfo.emergencyAddress
			? user.appUserInfo.emergencyAddress.line1
			: '';
		emergencySubdistrict = user.appUserInfo.emergencyAddress
			? user.appUserInfo.emergencyAddress.subdistrict
			: '';
		emergencyPostalCode = user.appUserInfo.emergencyAddress
			? user.appUserInfo.emergencyAddress.postalCode
			: '';

		//phone
		homePhone = user.appUserInfo.homePhone;
		workPhone = user.appUserInfo.workPhone;
	};
	function beforeUnload(event) {
		if (
			firstName === user.firstName &&
			lastName === user.lastName &&
			idType === user.IDCard &&
			cardNumber === user.cardNumber &&
			mobile === user.mobile &&
			email === user.email &&
			gender === user.appUserInfo.gender &&
			maritalStatus === user.appUserInfo.maritalStatus &&
			nationality === user.appUserInfo.nationality &&
			organization === user.appUserInfo.organization &&
			emergencyContact === user.appUserInfo.emergencyName &&
			emergencyRelationship === user.appUserInfo.emergencyRelationship &&
			// we don't check the address, too lazy
			homePhone === user.appUserInfo.homePhone &&
			workPhone === user.appUserInfo.workPhone &&
			//family
			fatherFirstname === user.appUserInfo.fatherFamilyInfo.firstName &&
			fatherLastName === user.appUserInfo.fatherFamilyInfo.lastName &&
			motherFirstname === user.appUserInfo.motherFamilyInfo.firstName &&
			motherLastName === user.appUserInfo.motherFamilyInfo.lastName &&
			sprouseFirstname === user.appUserInfo.sprouseFamilyInfo.firstName &&
			sprouseLastName === user.appUserInfo.sprouseFamilyInfo.lastName
		) {
			return '';
		} else {
			// Cancel the event as stated by the standard.
			event.preventDefault();
			// Chrome requires returnValue to be set.
			event.returnValue = '';
			// more compatibility
			return '...';
		}
	}
</script>

<svelte:window on:beforeunload={beforeUnload} />
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
		<div class="md:w-2/3 relative ">
			<div class="flex flex-row justify-between">
				<div>
					<ButtonGreen on:click={save}><i class="lni lni-save" /> {$_('save')}</ButtonGreen>
					<ButtonRed on:click={reset}><i class="lni lni-archive" /> {$_('reset')}</ButtonRed>
				</div>
				<div class="justify-self-end ">
					<ButtonBlue
						on:click={() => {
							history.back();
						}}
					>
						<i class="lni lni-backward" />
						{$_('return')}</ButtonBlue
					>
				</div>
			</div>
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
			<FamilyInfo
				bind:fatherFirstname
				bind:fatherLastName
				bind:motherFirstname
				bind:motherLastName
				bind:sprouseFirstname
				bind:sprouseLastName
			/>
		</div>
	</div>
</div>
<SmallModal
	show={showModal}
	on:complete={() => {
		showModal = false;
		goto(`/NewPatient/${id}`);
	}}
	showClose={false}>{$_('updateSuccess')}</SmallModal
>
