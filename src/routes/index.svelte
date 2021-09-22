<script>
	import { _, locale } from 'svelte-i18n';
	import PasswordBox from './_PasswordBox.svelte';
	import LanguageSetting from './_SetLanguage.svelte';
	import TextBox from './_TextBox.svelte';
</script>

<div class="container mx-auto flex justify-center ">
	<div
		class="p-3 mt-40 w-1/2 object-center bg-white shadow-lg flex justify-center flex-col items-center"
	>
		<img src="/Mahidol_dentis_th.png" class="w-96 shadowfilter" alt="" />
		<h1 class="text-xl my-2 w-2/3">
			{$_('login')}
		</h1>
		<div class="border-2 w-2/3 p-4">
			<TextBox label={$_('username')} />
			<PasswordBox hint={$_('newUserHint')} label={$_('password')} />

			<hr />
			<button
				class="mt-2 bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
			>
				{$_('login')}
			</button>
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
