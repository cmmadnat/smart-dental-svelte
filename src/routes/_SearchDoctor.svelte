<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Button from './_Button.svelte';
	let query = '';
	const fakeNames = [
		'กฤตยา อดุสาระดี',
		'บุญโชค ตะลุมพุก',
		'พลวัต แก้วมณีงาม',
		'นฤมล สันตติวงศ์',
		'อานนท์ อัศวเรืองฤทธิ์',
		'ธนชิต ศิวาวงศ์',
		'ณัฐภูมิ หงส์แก้ว',
		'ณีรนุช อดุสาระดี',
		'จุไรรัตน์ ดิเรกวิทยา',
		'ทวีเดช แก้วมณีงาม'
	];
	let filteredList = [];
	$: {
		if (query.length == 0) filteredList = [...fakeNames];
		else {
			filteredList = fakeNames.filter((x) => x.indexOf(query) !== -1);
		}
	}
</script>

<div class="rounded-lg bg-orange-100 p-3">
	<h1 class="text-xl bold mb-3">{$_('searchDoctor')}</h1>
	<!-- Regular Input -->
	<div class="relative flex w-full flex-wrap items-stretch mb-3">
		<input
			bind:value={query}
			type="text"
			placeholder={$_('searchDoctor') + '...'}
			class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
		/>
		<span
			class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"
		>
			<i class="lni lni-search" />
		</span>
	</div>
	{#each filteredList as name}
		<span
			class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200 uppercase last:mr-0 mr-1"
		>
			{name}
		</span>
	{/each}
</div>
