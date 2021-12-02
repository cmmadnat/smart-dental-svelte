<script>
	import { _ } from 'svelte-i18n';
	import ButtonGreen from '$lib/_ButtonGreen.svelte';
	const serviceList = [
		'การตรวจเช็คสุขภาพของฟันและช่องปาก',
		'การขูดหินปูน',
		'การขจัดคราบหรือฟอกฟัน',
		'การอุดฟัน',
		'การรักษารากฟัน',
		'การจัดฟัน',
		'การอุดฟันน้ำนม',
		'การขัดฟันและการเคลือบฟลูออไรด์',
		'การเคลือบหลุมร่องฟัน',
		'สะพานฟัน',
		'เคลือบฟัน',
		'ฟันปลอม'
	];
	let checked = [];
	const addChecked = (item) => {
		if (checked.indexOf(item) !== -1) {
			checked = checked.filter((it) => it != item);
		} else {
			checked = [...checked, item];
		}
	};
</script>

<div class="p-3 rouded-xl shadow-2xl bg-rose-100 rounded-md">
	<h2 class="bold text-xl text-lime-700">{$_('newRecord')}</h2>
	<hr />
	<div class="flex flex-row flex-wrap">
		{#each serviceList as s}
			{#if checked.indexOf(s) !== -1}
				<span
					on:click={() => addChecked(s)}
					class="cursor-pointer p-2 text-sm rounded-xl bg-blue-700 text-white m-1">{s}</span
				>
			{:else}
				<span
					on:click={() => addChecked(s)}
					class="cursor-pointer p-2 text-sm rounded-xl bg-white m-1">{s}</span
				>
			{/if}
		{/each}
	</div>
	<hr class="my-2" />
	<h3 class="bold text-xl">{$_('teeth')}</h3>
	<div class="w-full flex flex-row">
		<div class="w-1/2 p-2">
			<span class="text-sm">{$_('upperLeft')}</span>
			<div class="flex flex-row flex-wrap justify-end">
				{#each [18, 17, 16, 15, 14, 13, 12, 11] as s}
					{#if checked.indexOf(s) !== -1}
						<span
							on:click={() => addChecked(s)}
							class="cursor-pointer p-2 text-sm rounded-xl bg-blue-700 text-white m-1">{s}</span
						>
					{:else}
						<span
							on:click={() => addChecked(s)}
							class="cursor-pointer p-2 text-sm rounded-xl bg-white m-1">{s}</span
						>
					{/if}
				{/each}
			</div>
		</div>
		<div class="w-1/2 border-l-2 border-sky-800 p-2">
			<span class="text-sm">{$_('upperRight')}</span>
			<div class="flex flex-row flex-wrap">
				{#each [21, 22, 23, 24, 25, 25, 27, 28] as s}
					{#if checked.indexOf(s) !== -1}
						<span
							on:click={() => addChecked(s)}
							class="cursor-pointer p-2 text-sm rounded-xl bg-blue-700 text-white m-1">{s}</span
						>
					{:else}
						<span
							on:click={() => addChecked(s)}
							class="cursor-pointer p-2 text-sm rounded-xl bg-white m-1">{s}</span
						>
					{/if}
				{/each}
			</div>
		</div>
	</div>
	<div class="w-full flex flex-row">
		<div class="w-1/2 p-2">
			<span class="text-sm">{$_('lowerLeft')}</span>
			<div class="flex flex-row flex-wrap justify-end">
				{#each [48, 47, 46, 45, 44, 43, 42, 41] as s}
					{#if checked.indexOf(s) !== -1}
						<span
							on:click={() => addChecked(s)}
							class="cursor-pointer p-2 text-sm rounded-xl bg-blue-700 text-white m-1">{s}</span
						>
					{:else}
						<span
							on:click={() => addChecked(s)}
							class="cursor-pointer p-2 text-sm rounded-xl bg-white m-1">{s}</span
						>
					{/if}
				{/each}
			</div>
		</div>
		<div class="w-1/2 border-l-2 border-sky-800 p-2">
			<span class="text-sm">{$_('lowerRight')}</span>
			<div class="flex flex-row flex-wrap">
				{#each [31, 32, 33, 34, 35, 35, 37, 38] as s}
					{#if checked.indexOf(s) !== -1}
						<span
							on:click={() => addChecked(s)}
							class="cursor-pointer p-2 text-sm rounded-xl bg-blue-700 text-white m-1">{s}</span
						>
					{:else}
						<span
							on:click={() => addChecked(s)}
							class="cursor-pointer p-2 text-sm rounded-xl bg-white m-1">{s}</span
						>
					{/if}
				{/each}
			</div>
		</div>
	</div>

	<hr class="my-2" />
	<h3 class="bold text-lg">{$_('note')}</h3>
	<textarea class="p-2 w-full my-2" />
	<ButtonGreen><i class="lni lni-save" /> {$_('save')}</ButtonGreen>
</div>
