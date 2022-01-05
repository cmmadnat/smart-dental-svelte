<script>
	import * as Please from 'pleasejs';
	import Diagnosis from './_Diagnosis.svelte';
	let color;
	var stringToColour = function (stringInput) {
		return Please.make_color({
			seed: stringInput,
			value: 0.9
		});
	};
</script>

<td style={`padding:3px; background-color:${color}`}>
	<Diagnosis
		on:change={(e) => {
			// eslint-disable-next-line
			// @ts-ignore
			color = stringToColour(e.target.value);
		}}
	/>
</td>

<style>
	td {
		border: dotted 1px;
	}
</style>
