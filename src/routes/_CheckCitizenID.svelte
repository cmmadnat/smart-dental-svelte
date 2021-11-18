<script>
	import { _ } from 'svelte-i18n';
	let step = 1;
	import TextBox from '../lib/_TextBox.svelte';
	import Button from '../lib/_Button.svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let citizenID = '';
	export let phone = '';
	let error = '';
	const check = () => {
		const citizenIDLength = citizenID.length;
		if (citizenIDLength != 13) {
			error = $_('citizenIDWrongLength');
			return;
		}
		if (!Script_checkID(citizenID)) {
			error = $_('citizenIDWrongFormat');
			return;
		}
		dispatch('complete');
	};
	function IsNumeric(input) {
		var RE =
			/^-?(0|INF|(0[1-7][0-7]*)|(0x[0-9a-fA-F]+)|((0|[1-9][0-9]*|(?=[.,]))([.,][0-9]+)?([eE]-?\d+)?))$/;
		return RE.test(input);
	}
	function Script_checkID(id) {
		if (!IsNumeric(id)) return false;
		if (id.substring(0, 1) == 0) return false;
		if (id.length != 13) return false;
		for (var i = 0, sum = 0; i < 12; i++) sum += parseFloat(id.charAt(i)) * (13 - i);
		if ((11 - (sum % 11)) % 10 != parseFloat(id.charAt(12))) return false;
		return true;
	}
</script>

<div
	class="w-1/3 bg-pink-100 p-3"
	in:fly={{ duration: 300, x: 100, opacity: 0.5, easing: quintOut }}
>
	<p class="text-2xl">
		{$_('step')} <span class="text-blue-600">{step}</span>
		{$_('of')} <span class="text-blue-600">3</span>
	</p>
	<hr />
	<TextBox label={$_('citizenID')} bind:value={citizenID} />
	<TextBox label={$_('phone')} bind:value={phone} />

	<p class="my-2">{$_('checkDuplicateCitizenID')}</p>
	{#if citizenID != ''}
		<p>
			<span class="text-red-400 bold">{error}</span>
		</p>
	{/if}
	<Button on:click={check}>{$_('checkDuplicateCitizenIDandProceed')}</Button>
</div>
