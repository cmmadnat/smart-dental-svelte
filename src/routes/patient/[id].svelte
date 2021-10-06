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
</div>
