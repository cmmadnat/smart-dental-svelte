<script>
	import request from 'superagent';
	import Papa from 'papaparse';
	import { _ } from 'svelte-i18n';
	import LanguageSetting from './_SetLanguage.svelte';
	import { onMount } from 'svelte';
	import TextBox from './_TextBox.svelte';
	import ButtonGreen from './_ButtonGreen.svelte';
	import SignUpStep1 from './_sign-up-step1.svelte';
	let gender = 'm';
	let titles;
	onMount(() => {
		request
			.get('/titles.csv')
			.then((data) => Papa.parse(data.text, { header: true }))
			.then((data) => data.data)
			.then((data) => (titles = data.map((it) => ({ label: it.TITLE, id: it.CODE }))));

		hcaptcha.render('captcha'); // eslint-disable-line no-undef
	});
</script>

<svelte:head>
	<script src="https://js.hcaptcha.com/1/api.js" async defer></script>
	<meta
		http-equiv="Content-Security-Policy"
		content="script-src 'self' 'unsafe-eval' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com; frame-src 'self' https://hcaptcha.com https://*.hcaptcha.com; style-src 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com"
	/>
</svelte:head>
<div class="container mx-auto flex justify-center ">
	<div
		class="p-3 my-10 w-full lg:w-1/2 object-center bg-white shadow-lg flex justify-center flex-col items-center"
	>
		<img src="/Mahidol_dentis_th.png" class="w-96 shadowfilter" alt="" />
		<hr class="w-full my-2" />
		<h1 class="text-2xl bold text-center my-5">
			{$_('signup')}
		</h1>
		<div class="w-full flex flex-row flex-wrap">
			<SignUpStep1 {gender} {titles} />

			<div class="p-2 w-1/2">
				<TextBox label={$_('password')} />
			</div>
			<div class="p-2 w-1/2">
				<TextBox label={$_('verifyPassword')} />
			</div>
			<hr class="w-full my-2" />
			<div class="text-center w-full flex justify-center">
				<div id="captcha" class="h-captcha" data-sitekey="0ac5cabf-2e30-4ca0-90ee-11ba693777e6" />
			</div>

			<hr class="w-full my-2" />
			<div class="items-center flex-col flex justify-center  w-full">
				<div>
					<input type="checkbox" id="agreement" />

					<label for="agreement">{$_('agreeTo')}</label>
					<a class="underline" href="/" target="_blank">{$_('userAgreement')}</a>
				</div>
				<div class="w-1/2 text-center my-2">
					<ButtonGreen>{$_('agreeAndConfirm')}</ButtonGreen>
				</div>
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
