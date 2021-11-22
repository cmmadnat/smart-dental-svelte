<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export function load({ session }: LoadInput): LoadOutput {
		if (session.username) {
			return {
				status: 302,
				redirect: '/home'
			};
		}
		return {};
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import { _ } from 'svelte-i18n';
	import PasswordBox from './_PasswordBox.svelte';
	import LanguageSetting from '$lib/_SetLanguage.svelte';
	import ErrorBox from '$lib/_ErrorBox.svelte';
	import TextBox from '$lib/_TextBox.svelte';
	import SmallModal from '$lib/_SmallModal.svelte';
	import request from 'superagent';
	import { session } from '$app/stores';
	import emailValidator from '$lib/emailValidator';
	let username = '';
	let password = '';
	let error = '';
	let showModal = false;
	let recoveryEmail = '';
	let emailSent = false;
	let recoveryError = '';
	const sendRecoverEmail = async () => {
		if (!emailValidator(recoveryEmail)) recoveryError = $_('email') + ' ' + $_('wrong');
		else {
			await request.post('main-sendgrid').send({ email: recoveryEmail });
			emailSent = true;
			showModal = false;
		}
	};
	const forgotPassword = async () => {
		showModal = true;
	};
	const submitLogin = (e) => {
		e.preventDefault();
		request
			.post('/login')
			.send({ username, password })
			.then((data) => {
				if (data.body.success) {
					$session.username = username;
					goto('/home');
				} else {
					error = data.body.message;
				}
			});
	};
</script>

<div class="container mx-auto flex justify-center ">
	<div
		class="p-3 mt-40 lg:w-1/2 object-center bg-white shadow-lg flex justify-center flex-col items-center"
	>
		<img src="/Mahidol_dentis_th.png" class="w-96 shadowfilter" alt="" />
		<h1 class="text-xl my-2 w-2/3">
			{$_('login')}
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
				<TextBox label={$_('username')} bind:value={username} />
				<PasswordBox hint={$_('newUserHint')} label={$_('password')} bind:value={password} />

				<hr />
				<button
					class="mt-2 bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					type="submit"
				>
					{$_('login')}
				</button>
				<button
					class="mt-2 bg-rose-500 text-white active:bg-rose-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					on:click={() => {
						window.location = '/sign-up';
					}}
				>
					{$_('register')}
				</button>
			</form>
		</div>
		<p>
			<button on:click={forgotPassword}>{$_('forgotPassword')}</button>
		</p>
		{#if emailSent}
			<p class="bold text-center my-2">
				{$_('recoveryEmailSent')}
			</p>
		{/if}

		<div class="w-full my-2">
			<hr />
		</div>
		<div>
			<LanguageSetting />
		</div>
	</div>
</div>
<SmallModal show={showModal} on:close={() => (showModal = false)} on:complete={sendRecoverEmail}>
	{#if recoveryError.length != 0}
		<ErrorBox message={recoveryError} />
	{/if}
	<TextBox label={$_('email')} bind:value={recoveryEmail} />
</SmallModal>

<style>
	.shadowfilter {
		-webkit-filter: drop-shadow(4px 2px 2px rgba(0, 0, 0, 0.5));
		filter: drop-shadow(4px 2px 2px rgba(0, 0, 0, 0.5));
	}
</style>
