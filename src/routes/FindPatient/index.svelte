<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export async function load({ page, fetch }: LoadInput): Promise<LoadOutput> {
		const query = page.query.get('query');
		let activePage = page.query.get('page');
		activePage = activePage ? activePage : '1';
		const list = await fetch('/FindPatient/search', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ page: activePage, query })
		}).then((data) => data.json());

		if (query)
			return {
				props: {
					activePage,
					query,
					list
				}
			};

		return {};
	}
</script>

<script lang="ts">
	import Pagination from '$lib/_Pagination.svelte';
	import { _ } from 'svelte-i18n';
	import Header from '../_Navigation.svelte';
	import LanguageSetting from '$lib/_SetLanguage.svelte';

	import SearchUser from '../_SearchUser.svelte';
	import { goto } from '$app/navigation';

	export let query = '';
	export let list = [];
	export let activePage = '1';
	$: pageCount = Math.floor(list[1] / 20) + 1;
	$: activePageInt = parseInt(activePage);
</script>

<Header />
<div class="container mx-auto bg-white p-2 rounded-lg shadow-lg">
	<div class="flex justify-between">
		<h1 class="text-2xl bold">{$_('findPatient')}</h1>
		<LanguageSetting />
	</div>
	<hr />
	<div class=" p-4">
		<SearchUser {query} />
	</div>
	<table class="table-auto w-full border-2 ">
		<thead>
			<tr class="bg-blue-50">
				<th class="p-2 border-2">#</th>
				<th class="p-2 border-2">{$_('firstName')}</th>
				<th class="p-2 border-2">{$_('lastName')}</th>
				<th class="p-2 border-2">{$_('citizenID')}</th>
			</tr>
		</thead>
		<tbody>
			{#each list[0] as f, i}
				<tr
					class="text-left cursor-pointer hover:bg-blue-50"
					on:click={() => {
						goto('/patient/' + f.id);
					}}
				>
					<th class="border-2 p-2 text-center">{i + 1}</th>
					<th class="border-2 p-2">{f.firstName} </th>
					<th class="border-2 p-2">{f.lastName}</th>
					<th class="border-2 p-2">{f.cardNumber}</th>
				</tr>
			{/each}
		</tbody>
	</table>
	<Pagination
		activePage={activePageInt}
		pages={pageCount}
		on:selectPage={(e) => {
			goto(`FindPatient?query=${query}&page=${e.detail}`);
		}}
	/>
</div>
