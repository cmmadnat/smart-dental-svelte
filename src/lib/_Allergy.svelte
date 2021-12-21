<script>
	import { _ } from 'svelte-i18n';
	import MultiSelectBox from './_MultiSelectBox.svelte';
	import request from 'superagent';
	export let id;
</script>

<div class="flex flex-row p-2 items-center bg-rose-400 rounded-sm">
	<span class="mr-2 text-white">
		{$_('allergy')} :
	</span>

	<MultiSelectBox
		on:change={(e) => {
			console.log(e.detail);
			request
				.post('/service/save_allergies')
				.send({ id, allergies: e.detail })
				.then((data) => console.log(data));
		}}
	/>
</div>
