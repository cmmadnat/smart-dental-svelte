<script lang="ts">
	import request from 'superagent';
	import Papa from 'papaparse';
	import { _ } from 'svelte-i18n';
	import LanguageSetting from './_SetLanguage.svelte';
	import { onMount } from 'svelte';
	import TextBox from './_TextBox.svelte';
	import ButtonGreen from './_ButtonGreen.svelte';

	import SelectBox from './_SelectBox.svelte';
	import ErrorBox from './_ErrorBox.svelte';
	import checkCitizenID from './citizenIDValidator';
	import emailValidator from './emailValidator';
	let gender = 'm';
	let titles;
	// data form
	let title = '',
		firstName = '',
		lastName = '',
		IDCard = '',
		cardNumber = '',
		mobile = '',
		email = '',
		password = '',
		verifyPassword = '';

	onMount(() => {
		request
			.get('/titles.csv')
			.then((data) => Papa.parse(data.text, { header: true }))
			.then((data) => data.data)
			.then((data) => (titles = data.map((it) => ({ label: it.TITLE, id: it.CODE }))));
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		hcaptcha.render('captcha'); // eslint-disable-line no-undef
	});
	let error = '';
	const submit = (e: Event) => {
		e.preventDefault();
		const fields = [
			'title',
			'firstName',
			'lastName',
			'IDCard',
			'cardNumber',
			'mobile',
			'email',
			'password',
			'verifyPassword'
		];
		error = '';
		fields.every((it) => {
			if (eval(it).length === 0) {
				error = $_('pleaseInput') + ' ' + $_(it);
				return false;
			}
			return true;
		});
		if (error !== '') return;

		if (IDCard === '1' && !checkCitizenID(cardNumber)) {
			error = $_('cardNumber') + ' ' + $_('wrong');
		}
		if (mobile.length !== 10 || mobile.substring(0, 1) !== '0') {
			error = $_('mobile') + ' ' + $_('wrong');
		}
		if (verifyPassword !== password) {
			error = $_('passwordNotMatch');
		}
		if (!emailValidator(email)) {
			error = $_('email') + ' ' + $_('wrong');
		}
	};
</script>

<svelte:head>
	<script src="https://js.hcaptcha.com/1/api.js" async defer></script>
	<meta
		http-equiv="Content-Security-Policy"
		content="script-src 'self' 'unsafe-eval' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com; frame-src 'self' https://hcaptcha.com https://*.hcaptcha.com; style-src 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com"
	/>
</svelte:head>
<form on:submit={submit}>
	<div class="container mx-auto flex justify-center ">
		<div
			class="p-3 my-10 w-full lg:w-1/2 object-center bg-white shadow-lg flex justify-center flex-col items-center"
		>
			<img src="/Mahidol_dentis_th.png" class="w-96 shadowfilter" alt="" />
			<hr class="w-full my-2" />
			<h1 class="text-2xl bold text-center my-5">
				{$_('signup')}
			</h1>
			<hr class="w-full my-2" />

			{#if error.length !== 0}
				<ErrorBox message={error} />
			{/if}
			<div class="w-full flex flex-row flex-wrap">
				<div class="w-1/2">
					<div class="text-center py-5">
						<p class="my-2">
							<span>{$_('gender')}</span>
							<label for="male">
								<input type="radio" name="gender" bind:group={gender} value="m" id="male" />
								{$_('male')}</label
							>
							<label for="female">
								<input type="radio" name="gender" bind:group={gender} value="f" id="female" />
								{$_('female')}</label
							>
						</p>
					</div>
				</div>
				<div class=" w-1/2 p-2">
					<SelectBox bind:value={title} label={$_('title')} options={titles} />
				</div>
				<div class=" w-1/2 p-2">
					<TextBox bind:value={firstName} label={$_('firstName')} />
				</div>
				<div class=" w-1/2 p-2">
					<TextBox bind:value={lastName} label={$_('lastName')} />
				</div>
				<div class=" w-1/2 p-2">
					<SelectBox
						bind:value={IDCard}
						label={$_('IDCard')}
						options={[
							{ label: 'บัตรประชาชน', id: '1' },
							{ label: 'หนังสือเดินทาง', id: '2' }
						]}
					/>
				</div>
				<div class="p-2 w-1/2">
					<TextBox bind:value={cardNumber} label={$_('cardNumber')} />
				</div>
				<div class="p-2 w-1/2">
					<TextBox bind:value={mobile} label={$_('phone')} />
				</div>
				<div class="p-2 w-1/2">
					<TextBox bind:value={email} label={$_('email')} />
				</div>

				<div class="p-2 w-1/2">
					<TextBox bind:value={password} type="password" label={$_('password')} />
				</div>
				<div class="p-2 w-1/2">
					<TextBox bind:value={verifyPassword} type="password" label={$_('verifyPassword')} />
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
</form>

<style>
	.shadowfilter {
		-webkit-filter: drop-shadow(4px 2px 2px rgba(0, 0, 0, 0.5));
		filter: drop-shadow(4px 2px 2px rgba(0, 0, 0, 0.5));
	}
</style>
