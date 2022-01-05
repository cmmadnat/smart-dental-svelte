<script>
	import * as Please from 'pleasejs';
	import Diagnosis from './_Diagnosis.svelte';

	import TreatmentPlan from './_TreatmentPlan.svelte';
	var stringToColour = function (stringInput) {
		return Please.make_color({
			from_hash: stringInput
		});
	};
	let d1;
</script>

<table class="table-fixed">
	<tr class="alternate-column">
		<td>Treatment Plan</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>
		<td>
			<TreatmentPlan />
		</td>

		<td />
	</tr>
	<tr class="alternate-column">
		<td>Diagnosis</td>
		<td style={`background-color:${d1}`}>
			<Diagnosis
				on:change={(e) => {
					// eslint-disable-next-line
					// @ts-ignore
					d1 = stringToColour(e.target.value);
				}}
			/>
		</td>
		<td>
			<Diagnosis />
		</td>
		<td>
			<Diagnosis />
		</td>
		<td>
			<Diagnosis />
		</td>
		<td>
			<Diagnosis />
		</td>
		<td>
			<Diagnosis />
		</td>
		<td>
			<Diagnosis />
		</td>
		<td>
			<Diagnosis />
		</td>
		<td>
			<Diagnosis />
		</td>
		<td>
			<Diagnosis />
		</td>
		<td>
			<Diagnosis />
		</td>
		<td>
			<Diagnosis />
		</td>
		<td>
			<Diagnosis />
		</td>
		<td>
			<Diagnosis />
		</td>
		<td>
			<Diagnosis />
		</td>
		<td>
			<Diagnosis />
		</td>
		<td>
			<Diagnosis />
		</td>
		<td>
			<Diagnosis />
		</td>

		<td />
	</tr>
</table>
<img src="/exam_service.jpg" alt="" />

<style>
	.alternate-column td {
		border: 1px dotted gray;
		padding: 5px;
	}
</style>
