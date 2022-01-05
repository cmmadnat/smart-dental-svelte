<script lang="ts">
	import DiagnosisTd from './_DiagnosisTD.svelte';
	import RadioBox from './_RadioBox.svelte';
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
<div class="my-3">
	<span class="dy-2 text-xl font-bold">Oral & Maxillofacial Examinaton</span>

	<div class="flex gap-1 w-full justify-evenly">
		<div class="w-[350px] flex gap-2 flex-col">
			<div class="flex justify-between">
				<div>Face/neck</div>
				<div>
					<RadioBox label="Normal" /><RadioBox label="Abnormal" />
				</div>
			</div>
			<div class="flex justify-between">
				<div>Skin</div>
				<div>
					<RadioBox label="Normal" /><RadioBox label="Abnormal" />
				</div>
			</div>
			<div class="flex justify-between">
				<div>Lymph node</div>
				<div>
					<RadioBox label="Normal" /><RadioBox label="Abnormal" />
				</div>
			</div>
			<div class="flex justify-between">
				<div>TMJ</div>
				<div>
					<RadioBox label="Normal" /><RadioBox label="Abnormal" />
				</div>
			</div>
			<div class="flex justify-between">
				<div>Lips</div>
				<div>
					<RadioBox label="Normal" /><RadioBox label="Abnormal" />
				</div>
			</div>
			<div class="flex justify-between">
				<div>Gingiva/peiodontium</div>
				<div>
					<RadioBox label="Normal" /><RadioBox label="Abnormal" />
				</div>
			</div>
		</div>
		<div class="w-[350px] flex gap-2 flex-col">
			<div class="flex justify-between">
				<div>Floor of the mouth</div>
				<div>
					<RadioBox label="Normal" /><RadioBox label="Abnormal" />
				</div>
			</div>
			<div class="flex justify-between">
				<div>Palate</div>
				<div>
					<RadioBox label="Normal" /><RadioBox label="Abnormal" />
				</div>
			</div>
			<div class="flex justify-between">
				<div>Oropharynx</div>
				<div>
					<RadioBox label="Normal" /><RadioBox label="Abnormal" />
				</div>
			</div>
			<div class="flex justify-between">
				<div>Enamel/Dentin</div>
				<div>
					<RadioBox label="Normal" /><RadioBox label="Abnormal" />
				</div>
			</div>
			<div class="flex justify-between">
				<div>Alveolar mucosa</div>
				<div>
					<RadioBox label="Normal" /><RadioBox label="Abnormal" />
				</div>
			</div>
			<div class="flex justify-between">
				<div>Tongue</div>
				<div>
					<RadioBox label="Normal" /><RadioBox label="Abnormal" />
				</div>
			</div>
		</div>
		<div class="w-[350px] flex gap-2 flex-col">
			<div class="flex justify-between">
				<div class="w-[180px]">Frenum attachment/vestibule</div>
				<div>
					<RadioBox label="Normal" /><RadioBox label="Abnormal" />
				</div>
			</div>
			<div class="flex justify-between">
				<div class="w-[180px]">If edentulous max/mand ridges</div>
				<div>
					<RadioBox label="Normal" /><RadioBox label="Abnormal" />
				</div>
			</div>
			<div class="flex justify-between">
				<div class="w-[180px]">Buccal mucosa</div>
				<div>
					<RadioBox label="Normal" /><RadioBox label="Abnormal" />
				</div>
			</div>
			<div class="flex justify-between">
				<div class="w-[180px]">Saliva/Salivary glands and ducts</div>
				<div>
					<RadioBox label="Normal" /><RadioBox label="Abnormal" />
				</div>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-row flex-wrap w-9/12 mx-auto my-3">
	<div class="w-1/2 flex ">
		<div class="font-bold mr-2">Calculus</div>
		<div class="">
			<RadioBox label="Absent" />
			<RadioBox label="Slight" />
			<RadioBox label="Moderate" />
			<RadioBox label="Heavy" />
		</div>
	</div>
	<div class="w-1/2 flex">
		<div class="font-bold mr-2">Oral hygiene</div>
		<div class="">
			<RadioBox label="Excellent" />
			<RadioBox label="Average" />
			<RadioBox label="Poor	" />
		</div>
	</div>

	<div class="w-1/2 flex">
		<div class="font-bold mr-2">Occlusion</div>
		<div class="flex">
			<RadioBox label="Class I" />
			<RadioBox label="Class II" />
			<RadioBox label="Class III" />
			<RadioBox label="Other	" />
		</div>
	</div>
</div>
<div class="my-3">
	<span class="dy-2 text-xl font-bold">Radiographic Examination</span>
</div>
<img src="/exam_service.jpg" alt="" />

<style>
	.alternate-column td {
		border: 1px dotted gray;
		padding: 5px;
	}
</style>
