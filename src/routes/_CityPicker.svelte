<script>
	import TextBox from './_TextBox.svelte';
	import SelectBox from './_SelectBox.svelte';
	import { _ } from 'svelte-i18n';
	import superagent from 'superagent';
	export let value = '';
	let postalCode = '';
	let subDistricts = [];
	let selectedSubdistrict = '';
	let selectedSecondAddress = '';
	$: {
		if (postalCode.length == 5) {
			superagent
				.get('/postalCodeInfo')
				.query({ postalCode })
				.then((data) => {
					return data.body;
				})
				.then((data) => {
					subDistricts = data.subDistrict.map((it) => ({ id: it, label: it }));
				});

			/*var af = thai.allField(44130)*/
			/*console.log(af)*/
		}
	}
	const submit = () => {
		superagent
			.get('/postalCodeInfo')
			.query({ postalCode, subDistrict: selectedSubdistrict })
			.then((data) => data.body)
			.then((data) => {
				selectedSecondAddress = `${data.subDistrict}, ${data.districtName}, ${data.provinceName}, ${data.zipCode}`;
				value = selectedSecondAddress;
			});
	};
</script>

<div class="flex">
	<div class="w-1/3">
		<TextBox bind:value={postalCode} label={$_('postalCode')} />
	</div>
	{#if subDistricts.length != 0}
		<div class="w-2/3 pl-2">
			<SelectBox
				options={subDistricts}
				label={$_('subdistrict')}
				bind:value={selectedSubdistrict}
				on:change={submit}
			/>
		</div>
	{/if}
</div>
{#if selectedSecondAddress.length != 0}
	<span class="text-blue-800 bold">{$_('addressLineTwo')}</span>
	<p>
		{selectedSecondAddress}
	</p>
{/if}
