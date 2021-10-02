<script>
	import TextBox from './_TextBox.svelte';
	import { _ } from 'svelte-i18n';
	import Header from './_Navigation.svelte';
	import LanguageSetting from './_SetLanguage.svelte';
	import Button from './_Button.svelte';
	import CheckCitizenID from './_CheckCitizenID.svelte';
	import GetBasicPatientInfo from './_GetBasicPatientInfo.svelte';
	import GetAddress from './_GetAddress.svelte';
	let step = 1;
	let citizenID = '1100500333162';
	let firstName = 'Thitiwat';
	let lastName = 'Hemvimon';
	let gender = 'm';
	let birthday = new Date();
	/*
       let citizenID = '';
       let firstName = '';
       let lastName = '';
       let gender = 'm';
	*/
	const goBack = () => {
		step = step - 1;
	};
	const gotCitizenID = () => {
		step = 2;
	};
	const gotBasicInfo = () => {
		console.log(citizenID);
		console.log(firstName);
		console.log(lastName);
		console.log(birthday);
		console.log(gender);
		step = 3;
	};
</script>

<Header />
<div class="container mx-auto bg-white p-2 rounded-lg shadow-lg">
	<div class="flex justify-between">
		<h1 class="text-2xl bold">{$_('addPatient')}</h1>
		<LanguageSetting />
	</div>
	<hr />
	{#if step == 1}
		<div class="py-3 flex justify-center">
			<CheckCitizenID bind:citizenID on:complete={gotCitizenID} />
		</div>
	{:else if step == 2}
		<div class="py-3 flex justify-center">
			<Button on:click={goBack}><i class="lni lni-backward" /> {$_('back')}</Button>
			<GetBasicPatientInfo
				bind:gender
				bind:firstName
				bind:lastName
				bind:birthday
				on:complete={gotBasicInfo}
			/>
		</div>
	{:else if step == 3}
		<div class="py-3 flex justify-center">
			<Button on:click={goBack}><i class="lni lni-backward" /> {$_('back')}</Button>
			<GetAddress />
		</div>
	{/if}
</div>
