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
	import { _ } from 'svelte-i18n';
	import Header from '../_Navigation.svelte';
	import LanguageSetting from '$lib/_SetLanguage.svelte';
	import Schedule from './_Schedule.svelte';
	import NewRecord from './_NewRecord.svelte';
	import Visits from './_Visits.svelte';
	import type { AppUser } from '$lib/entity/AppUser';
	import ButtonRed from '$lib/_ButtonRed.svelte';
	import { goto } from '$app/navigation';
	import ButtonGreen from '$lib/_ButtonGreen.svelte';
	import RowItem from './_RowItem.svelte';
	export let user: AppUser;
	export let id: string;
	/*eslint-disable*/
	let gender = 'm',
		birthday = '2-5-1989',
		addressLineOne = '66/97 M.Supalai Ratchamontri Rd.',
		addressLineTwo = 'Bangpai, Bangkae, Bangkok, 10160';
	/*eslint-enable*/
	$: firstName = user ? user.firstName : '';
	$: lastName = user ? user.lastName : '';
	$: phone = user ? user.mobile : '';
	$: citizenID = user ? user.cardNumber : '';
</script>

<Header />
<div class="container mx-auto bg-white p-2 rounded-lg shadow-lg">
	{#if user != null}
		<div class="flex justify-between">
			<h1 class="text-2xl bold">{$_('patientDetail')}</h1>
			<LanguageSetting />
		</div>
		<hr />
		<div class="flex flex-row justify-between bg-blue-50 my-2 p-2 ">
			<table class="table-auto">
				<RowItem key="citizenID" value={citizenID} />
				<RowItem key="phone" value={phone} />
				<RowItem key="firstName" value={firstName} />
				<RowItem key="lastName" value={lastName} />
			</table>
			<table class="table-auto">
				<RowItem key="gender" value={gender} />
				<RowItem key="birthday" value={birthday} />
				<RowItem key="addressLineOne" value={addressLineOne} />
				<RowItem key="addressLineTwo" value={addressLineTwo} />
			</table>
			<div>
				<ButtonGreen
					on:click={() => {
						goto('/NewPatient/' + id);
					}}
				>
					<i class="lni lni-pencil" /> {$_('edit')}</ButtonGreen
				>
			</div>
		</div>
		<div class="flex">
			<div class="w-1/3 p-2">
				<Schedule />
				<Visits />
			</div>
			<div class="w-2/3 p-2">
				<NewRecord />
			</div>
		</div>
	{:else}
		User Not Found <ButtonRed
			on:click={() => {
				goto('/home');
			}}>Return</ButtonRed
		>
	{/if}
</div>
