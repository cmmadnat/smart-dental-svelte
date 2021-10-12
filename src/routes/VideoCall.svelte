<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export function load({ page }: LoadInput): LoadOutput {
		const room = page.query.get('room') ? page.query.get('room') : 'defaultRoom';

		return {
			props: {
				room
			}
		};
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import LanguageSetting from './_SetLanguage.svelte';
	import { _ } from 'svelte-i18n';
	export let room;
	onMount(() => {
		const domain = 'telecon.ict.mahidol.ac.th';
		const options = {
			roomName: room,
			width: 700,
			height: 700,
			parentNode: document.querySelector('#meet')
		};
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		new JitsiMeetExternalAPI(domain, options); // eslint-disable-line no-undef
	});
</script>

<svelte:head>
	<script src="https://meet.jit.si/external_api.js"></script>
</svelte:head>
<div class="container mx-auto bg-white p-2 rounded-lg shadow-lg">
	<div class="flex justify-between">
		<h1 class="text-2xl bold">{$_('videoCall')}</h1>
		<LanguageSetting />
	</div>
	<hr class="my-2" />
	<div id="meet" class="mx-auto" style="width:700px; height:700px;" />
</div>
