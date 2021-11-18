<script lang="ts">
	import { _ } from 'svelte-i18n';

	import Papa from 'papaparse';
	import { onMount } from 'svelte';
	import TextBox from '$lib/_SmallTextBox.svelte';
	import SelectBox from '$lib/_SmallSelectBox.svelte';
	import DateInput from '$lib/_SmallDateInput.svelte';
	let titles = [];
	let countries = [];
	let religions = [];
	let occupations = [];

	let occupation = '';
	let gender = 'm';
	let nationality = 'THA';
	let idType = '1';
	let religion = '1';

	onMount(() => {
		fetch('/titles.csv')
			.then((data) => data.text())
			.then((data) => Papa.parse(data, { header: true }).data)
			.then((data) => {
				console.log(data);
				titles = data.map((it) => ({ id: it.CODE, label: it.TITLE }));
			});
		fetch('/country-list-th.json')
			.then((data) => data.json())
			.then(
				(data) =>
					(countries = data.map((it) => ({ id: it.alpha3, label: it.name + ' - ' + it.enName })))
			);
		fetch('/occupations.csv')
			.then((data) => data.text())
			.then((data) => Papa.parse(data, { header: true }).data)
			.then((data) =>
				data.sort((a, b) => {
					return a.name.localeCompare(b.name);
				})
			)
			.then((data) => (occupations = data.map((it) => ({ id: it.name, label: it.name }))));

		fetch('/religions.csv')
			.then((data) => data.text())
			.then((data) => Papa.parse(data, { header: true }).data)
			.then((data) => (religions = data.map((it) => ({ id: it.code, label: it.name }))));
	});
</script>

<div class="bg-blue-200">
	<h1 class="bold text-2xl w-full p-2">{$_('personalInfo')}</h1>
</div>
<div class="flex flex-row flex-wrap">
	<div class="w-1/3 px-2">
		<SelectBox label={$_('title')} options={titles} />
	</div>
	<div class=" w-1/3 px-2">
		<TextBox label={$_('firstName')} />
	</div>

	<div class=" w-1/3 px-2">
		<TextBox label={$_('lastName')} />
	</div>
	<div class="w-1/3">
		<div class="text-center py-5">
			<p class="my-2">
				<input type="radio" bind:group={gender} value="m" id="male" />
				<label for="male">{$_('male')}</label>
				<input type="radio" bind:group={gender} value="f" id="female" />
				<label for="female"> {$_('female')}</label>
			</p>
		</div>
	</div>
	<div class="w-1/3 px-2">
		<span class="text-sm">{$_('birthday')}</span>
		<DateInput />
	</div>
	<div class="w-1/3 px-2">
		<SelectBox
			label={$_('maritalStatus')}
			options={[
				{ id: '1', label: 'โสด' },
				{ id: '2', label: 'สมรส' },
				{ id: '3', label: 'หย่า' }
			]}
		/>
	</div>
	<div class="w-1/3 px-2">
		<SelectBox bind:value={nationality} options={countries} label={$_('nationality')} />
	</div>
	<div class="w-1/3 px-2">
		<SelectBox options={religions} bind:value={religion} label={$_('religion')} />
	</div>
</div>
<div class="flex flex-row">
	<div class="w-1/3 px-2">
		<SelectBox bind:value={occupation} options={occupations} label={$_('occupation')} />
	</div>
	<div class="px-2 w-2/3">
		<TextBox label={$_('organization')} />
	</div>
</div>
<div class="flex flex-row flex-wrap">
	<div class=" w-1/5 px-2">
		<SelectBox
			bind:value={idType}
			label={$_('IDCard')}
			options={[
				{ label: 'บัตรประชาชน', id: '1' },
				{ label: 'หนังสือเดินทาง', id: '2' }
			]}
		/>
	</div>
	<div class="px-3 w-2/5">
		<TextBox label={$_('cardNumber')} />
	</div>
	<div class="w-2/5 px-2">
		<span class="text-sm">{$_('expireDate')}</span>
		<DateInput />
	</div>
	<div class="px-3 w-1/2">
		<TextBox label={$_('phone')} />
	</div>
	<div class="px-3 w-1/2">
		<TextBox label={$_('email')} />
	</div>
</div>
