<script lang="ts">
	import DiagnosisTd from './_DiagnosisTD.svelte';
	import TreatmentTd from './_TreatmentTD.svelte';
</script>

<table class="table-fixed">
	<thead>
		<th />
		<th class="text-xl text-center font-bold">18</th>
		<th class="text-xl text-center font-bold">17</th>
		<th class="text-xl text-center font-bold">16</th>
		<th class="text-xl text-center font-bold">15</th>
		<th class="text-xl text-center font-bold">14</th>
		<th class="text-xl text-center font-bold">13</th>
		<th class="text-xl text-center font-bold">12</th>
		<th class="text-xl text-center font-bold">11</th>
		<th />
		<th class="text-xl text-center font-bold">21</th>
		<th class="text-xl text-center font-bold">22</th>
		<th class="text-xl text-center font-bold">23</th>
		<th class="text-xl text-center font-bold">24</th>
		<th class="text-xl text-center font-bold">25</th>
		<th class="text-xl text-center font-bold">26</th>
		<th class="text-xl text-center font-bold">27</th>
		<th class="text-xl text-center font-bold">28</th>
	</thead>
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
		<td class="bg-cyan-400" />
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
		<td class="bg-cyan-400" />
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
<table class="table-fixed">
	<thead>
		<th />
		<th class="text-xl text-center font-bold">38</th>
		<th class="text-xl text-center font-bold">37</th>
		<th class="text-xl text-center font-bold">36</th>
		<th class="text-xl text-center font-bold">35</th>
		<th class="text-xl text-center font-bold">34</th>
		<th class="text-xl text-center font-bold">33</th>
		<th class="text-xl text-center font-bold">32</th>
		<th class="text-xl text-center font-bold">31</th>
		<th />
		<th class="text-xl text-center font-bold">41</th>
		<th class="text-xl text-center font-bold">42</th>
		<th class="text-xl text-center font-bold">43</th>
		<th class="text-xl text-center font-bold">44</th>
		<th class="text-xl text-center font-bold">45</th>
		<th class="text-xl text-center font-bold">46</th>
		<th class="text-xl text-center font-bold">47</th>
		<th class="text-xl text-center font-bold">48</th>
	</thead>
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
		<td class="bg-cyan-400" />
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
		<td class="bg-cyan-400" />
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
