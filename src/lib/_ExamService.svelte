<script lang="ts">
	import DiagnosisTd from './_DiagnosisTD.svelte';
	import TreatmentTd from './_TreatmentTD.svelte';
</script>

<table class="table-fixed">
	<tr class="alternate-column">
		<td>Treatment Plan</td>
		<TreatmentTd />
		<TreatmentTd />
		<TreatmentTd />
		<TreatmentTd />
		<TreatmentTd />
		<TreatmentTd />
		<TreatmentTd />
		<TreatmentTd />
		<TreatmentTd />
		<TreatmentTd />
		<TreatmentTd />
		<TreatmentTd />
		<TreatmentTd />
		<TreatmentTd />
		<TreatmentTd />
		<TreatmentTd />
	</tr>
	<tr class="alternate-column">
		<td>Diagnosis</td>
		<DiagnosisTd />
		<DiagnosisTd />
		<DiagnosisTd />
		<DiagnosisTd />
		<DiagnosisTd />
		<DiagnosisTd />
		<DiagnosisTd />
		<DiagnosisTd />
		<DiagnosisTd />
		<DiagnosisTd />
		<DiagnosisTd />
		<DiagnosisTd />
		<DiagnosisTd />
		<DiagnosisTd />
		<DiagnosisTd />
		<DiagnosisTd />
	</tr>
</table>
<img src="/exam_service.jpg" alt="" />

<style>
	.alternate-column td {
		border: 1px dotted gray;
		padding: 5px;
	}
</style>
