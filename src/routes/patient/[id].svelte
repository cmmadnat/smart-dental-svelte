<script lang="ts">
	interface Account {
		firstName: string;
		lastName: string;
		age: number;
		citizenID: string;
	}
	import { _ } from 'svelte-i18n';
	import Header from '../_Navigation.svelte';
	import LanguageSetting from '../_SetLanguage.svelte';
	const random = Math.random()

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
