<script lang="ts">
	import { _ } from 'svelte-i18n';
	import CityPicker from '../_CityPicker.svelte';
	import SelectBox from '$lib/_SmallSelectBox.svelte';
	import TextBox from '$lib/_SmallTextBox.svelte';
	let postalCode = '';
	let subdistrict = '';

	let addressLineTwo = '';

	export let addressType = '0';
	export let emergencyAddressType = '0';
	export let addressLineOne = '';
	export let emergencyAddressLineOne = '';

	const addressTypes = ['ที่อยู่ตามทะเบียนบ้าน', 'อื่นๆ'].map((it, index) => ({
		id: index + 1 + '',
		label: it
	}));
</script>

<div class="bg-blue-200">
	<h1 class="bold text-2xl w-full p-2">{$_('contactInfo')}</h1>
</div>
<div class="flex flex-row flex-wrap">
	<div class="w-1/3 px-2">
		<SelectBox bind:value={addressType} label={$_('addressType')} options={addressTypes} />
	</div>
	<div class="w-2/3 px-2">
		<TextBox bind:value={addressLineOne} label={$_('addressLineOne')} />
	</div>
	<div class="px-2 w-full">
		<CityPicker
			bind:postalCode
			bind:selectedSubdistrict={subdistrict}
			bind:value={addressLineTwo}
		/>
	</div>
	<div class="px-2 w-1/3">
		<TextBox label={$_('phone')} />
	</div>
	<div class="px-2 w-1/3">
		<TextBox label={$_('homePhone')} />
	</div>
	<div class="px-2 w-1/3">
		<TextBox label={$_('workPhone')} />
	</div>
	<div class="px-2 w-1/3">
		<TextBox label={$_('emergencyContact')} />
	</div>
	<div class="px-2 w-1/3">
		<TextBox label={$_('relationship')} />
	</div>
	<div class="w-full">
		<input type="checkbox" id="sameAddressAsMe" />
		<label for="sameAddressAsMe">{$_('sameAddressAsMe')}</label>
	</div>
	<div class="w-1/3 px-2">
		<SelectBox bind:value={emergencyAddressType} label={$_('addressType')} options={addressTypes} />
	</div>
	<div class="w-2/3 px-2">
		<TextBox bind:value={emergencyAddressLineOne} label={$_('addressLineOne')} />
	</div>
	<div class="px-2 w-full">
		<CityPicker
			bind:postalCode
			bind:selectedSubdistrict={subdistrict}
			bind:value={addressLineTwo}
		/>
	</div>
</div>
