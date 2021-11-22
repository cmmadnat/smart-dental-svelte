<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export function load({ page }: LoadInput): LoadOutput {
		const key = page.query.get('key');
		return {
			props: { key }
		};
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import { _ } from 'svelte-i18n';
	import PasswordBox from '$lib/_PasswordBox.svelte';
	import LanguageSetting from '$lib/_SetLanguage.svelte';
	import SmallModal from '$lib/_SmallModal.svelte';
	import request from 'superagent';
	let password = '';
	let error = '';
	let showModal = false;
	export let key = '';
	let verifyPassword = '';
	const gotoLogin = async () => {
		goto('/');
	};
	const submitLogin = async (e) => {
		e.preventDefault();
		if (password !== verifyPassword) {
			error = $_('passwordNotMatch');
		} else {
			await request.post('/forgetPassword/resetPassword').send({ key, password });
			showModal = true;
		}
	};
</script>

<div class="container mx-auto flex justify-center ">
	<div
		class="p-3 mt-40 lg:w-1/2 object-center bg-white shadow-lg flex justify-center flex-col items-center"
	>
		<img src="/Mahidol_dentis_th.png" class="w-96 shadowfilter" alt="" />
		<h1 class="text-xl my-2 w-2/3">
			{$_('forgetPassword')}
		</h1>
		{#if error.length != 0}
			<div class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-amber-500">
				<span class="text-xl inline-block mr-5 align-middle">
					<i class="fas fa-bell" />
				</span>
				<span class="inline-block align-middle mr-8">
					<b class="capitalize">{$_('error')}!</b>
					{$_(error)}
				</span>
			</div>
		{/if}
		<div class="border-2 w-2/3 p-4">
			<form on:submit={submitLogin}>
				<PasswordBox label={$_('password')} bind:value={password} />
				<PasswordBox label={$_('verifyPassword')} bind:value={verifyPassword} />

				<hr />
				<button
					class="mt-2 bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					type="submit"
				>
					{$_('changePassword')}
				</button>
			</form>
		</div>

		<div class="w-full my-2">
			<hr />
		</div>
		<div>
			<LanguageSetting />
		</div>
	</div>
</div>
<SmallModal show={showModal} on:close={() => (showModal = false)} on:complete={gotoLogin}>
	{$_('passwordReset')}
</SmallModal>

<style>
	.shadowfilter {
		-webkit-filter: drop-shadow(4px 2px 2px rgba(0, 0, 0, 0.5));
		filter: drop-shadow(4px 2px 2px rgba(0, 0, 0, 0.5));
	}
</style>
