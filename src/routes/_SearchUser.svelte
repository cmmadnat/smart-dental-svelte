<script>
	import { _ } from 'svelte-i18n';
	import Button from './_Button.svelte';
	import ButtonGreen from './_ButtonGreen.svelte';
</script>

<div class="rounded-lg bg-yellow-100 p-3">
	<h1 class="text-xl bold mb-3">{$_('searchUser')}</h1>
	<!-- Regular Input -->
	<div class="relative flex w-full flex-wrap items-stretch mb-3">
		<input
			type="text"
			placeholder={$_('searchUser') + '...'}
			class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
		/>
		<span
			class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"
		>
			<i class="lni lni-search" />
		</span>
	</div>
	<div class="mt-2">
		<Button size="small"><i class="lni lni-search" /> {$_('search')}</Button>
		<ButtonGreen size="small"><i class="lni lni-plus" /> {$_('addPatient')}</ButtonGreen>
	</div>
</div>
