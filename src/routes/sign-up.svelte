<script>
	import request from 'superagent';
	import Papa from 'papaparse';
	import { _ } from 'svelte-i18n';
	import SelectBox from './_SelectBox.svelte';
	import LanguageSetting from './_SetLanguage.svelte';
	import { onMount } from 'svelte';
	let gender = 'm';
	let titles;
	onMount(() => {
		request
			.get('/titles.csv')
			.then((data) => Papa.parse(data.text, { header: true }))
			.then((data) => data.data)
			.then((data) => (titles = data.map((it) => ({ label: it.TITLE, id: it.CODE }))));
	});
</script>

<div class="container mx-auto flex justify-center ">
	<div
		class="p-3 mt-40 w-full lg:w-1/2 object-center bg-white shadow-lg flex justify-center flex-col items-center"
	>
		<img src="/Mahidol_dentis_th.png" class="w-96 shadowfilter" alt="" />
		<hr class="w-full my-2" />
		<h1 class="text-2xl bold text-center my-5">
			{$_('signup')}
		</h1>
		<div class="w-full flex flex-row">
			<div class="w-1/2">
				<div class="text-center py-5">
					<p class="my-2">
						<span>{$_('gender')}</span>

						<input type="radio" bind:group={gender} value="m" id="male" />
						<label for="male">{$_('male')}</label>
						<input type="radio" bind:group={gender} value="f" id="female" />
						<label for="female"> {$_('female')}</label>
					</p>
				</div>
			</div>
			<div class=" w-1/2">
				<SelectBox label={$_('title')} options={titles} />
			</div>
		</div>

		<div class="w-full my-2">
			<hr />
		</div>
		<div>
			<LanguageSetting />
		</div>
	</div>
</div>

<style>
	.shadowfilter {
		-webkit-filter: drop-shadow(4px 2px 2px rgba(0, 0, 0, 0.5));
		filter: drop-shadow(4px 2px 2px rgba(0, 0, 0, 0.5));
	}
</style>
