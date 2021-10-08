<script>
	import { _ } from 'svelte-i18n';
	import dayjs from 'dayjs';
	import localeData from 'dayjs/plugin/localeData.js';
	import customParseFormat from 'dayjs/plugin/customParseFormat.js';
	import 'dayjs/locale/th.js';

	dayjs.extend(localeData);
	dayjs.extend(customParseFormat);
	dayjs().localeData();

	export let date = new Date();
	let d = dayjs(date).date(),
		m = dayjs(date).month() + 1,
		y = dayjs(date).year() + 543;

	dayjs.locale('en');
	const enMonths = dayjs.months();
	dayjs.locale('th');
	const thMonths = dayjs.months();
	const correctYear = () => {
		if (parseInt(y) < 2400 || parseInt(y) > 2600) y = dayjs().year() + 543;
	};
	$: {
		dayjs.locale('en');
		let formattedText = `${m}-${d}-${parseInt(y) - 543}`;
		let parsedDay = dayjs(formattedText, 'M-D-YYYY');
		const daysInMonth = dayjs(`${m}-1-${parseInt(y) - 543}`, 'M-D-YYYY').daysInMonth();

		if (parseInt(d) > daysInMonth) {
			d = daysInMonth;
			formattedText = `${m}-${d}-${parseInt(y) - 543}`;
			parsedDay = dayjs(formattedText, 'M-D-YYYY');
		}
		date = parsedDay.toDate();
	}
</script>

<div class="flex flex-row justify-between">
	<div class="w-24">
		<input
			class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
			placeholder={$_('date')}
			bind:value={d}
		/>
	</div>
	<div class="w-60">
		<select
			class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
			bind:value={m}
		>
			{#each enMonths as e, i}
				<option value={i + 1}>{thMonths[i]} - {e}</option>
			{/each}
		</select>
	</div>

	<div class="w-24">
		<input
			class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
			placeholder={$_('be')}
			on:blur={correctYear}
			bind:value={y}
		/>
	</div>
</div>
