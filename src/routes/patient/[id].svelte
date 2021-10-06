<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Header from '../_Navigation.svelte';
	import LanguageSetting from '../_SetLanguage.svelte';
	/*eslint-disable*/
	const citizenID = '1100500333162',
		phone = '0818365575',
		firstName = 'Thitiwat',
		lastName = 'Hemvimon',
		gender = 'm',
		birthday = '2-5-1989',
		addressLineOne = '66/97 M.Supalai Ratchamontri Rd.',
		addressLineTwo = 'Bangpai, Bangkae, Bangkok, 10160';
	/*eslint-enable*/
	const myEval = (q: string) => {
		return eval(q);
	};
</script>

<Header />
<div class="container mx-auto bg-white p-2 rounded-lg shadow-lg">
	<div class="flex justify-between">
		<h1 class="text-2xl bold">{$_('patientDetail')}</h1>
		<LanguageSetting />
	</div>
	<hr />
	Display name and other information
	<table class="table-auto">
		{#each ['citizenID', 'phone', 'firstName', 'lastName', 'gender', 'birthday', 'addressLineOne', 'addressLineTwo'] as a}
			<tr>
				<td class="text-blue-800">{$_(a)}</td>
				<td>{myEval(a)}</td>
			</tr>
		{/each}
	</table>
</div>
