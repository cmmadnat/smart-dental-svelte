<script lang="ts">
	import { onMount } from 'svelte';

	import CheckBox from './_CheckBox.svelte';
	import CheckBoxOther from './_CheckBoxOther.svelte';
	import ImageEditor from 'tui-image-editor';
	import 'tui-image-editor/dist/tui-image-editor.css';
	import 'tui-color-picker/dist/tui-color-picker.css';
	import DiagnosisTd from './_DiagnosisTD.svelte';
	import RadioBox from './_RadioBox.svelte';
	import TreatmentTd from './_TreatmentTD.svelte';
	export let operativeTreatment = false;
	export let prostheticTreatment = false;
	onMount(() => {
		// const FileSaver = require('file-saver'); //to download edited image to local. Use after npm install file-saver
		// const blackTheme = require('./js/theme/black-theme.js');
		// const locale_ru_RU = {
		// 	// override default English locale to your custom
		// 	Crop: 'Обзрезать',
		// 	'Delete-all': 'Удалить всё'
		// 	// etc...
		// };
		/*const instance = new ImageEditor(document.querySelector('#tui-image-editor'), {*/
		new ImageEditor(document.querySelector('#tui-image-editor'), {
			includeUI: {
				loadImage: {
					path: '/exam_service_chart.png',
					name: 'SampleImage'
				},
				// locale: locale_ru_RU,
				// theme: blackTheme, // or whiteTheme
				menu: ['draw'],
				// initMenu: 'draw',
				menuBarPosition: 'bottom'
			},
			// cssMaxWidth: 700,
			// cssMaxHeight: 500,
			selectionStyle: {
				cornerSize: 20,
				rotatingPointOffset: 70
			}
		});
	});
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
	<div class="flex gap-4 flex-wrap">
		<CheckBox name="panoramic" label="Panoramic" />
		<CheckBox name="latCeph" label="Lat. Ceph" />
		<CheckBox name="paCeph" label="PA Ceph." />
		<CheckBox name="fm" label="FM" />
		<CheckBox name="pw" label="PW" />
		<CheckBoxOther name="bw" label="BW" />
		<CheckBoxOther name="occlusal" label="Occlusal" />
		<CheckBoxOther name="other" label="Other" />
		<div class="flex items-center w-full gap-1">
			Finding
			<div class="flex-1">
				<input type="text" class="w-full" name="" id="" />
			</div>
		</div>
	</div>
</div>
<div class="my-3">
	<span class="dy-2 text-xl font-bold">Provisional Diagnosis</span>
	<textarea name="" class="w-full" id="" cols="30" rows="2" />
</div>

<div class="my-3 flex">
	<div class="flex-1">
		<span class="dy-2 text-xl font-bold">Treatment planning</span>
		<CheckBoxOther name="primaryAndEmergencyTreatment" label="Primary and Emergency Treatment" />
		<CheckBox name="oralProphylaxis" label="Oral Prophylaxis" />
		<div class="flex gap-2">
			<CheckBox name="periodontalTreatment" label="Periodontal Treatment" />
			<CheckBox name="scaling" label="Scaling" />
			<CheckBox name="gingivitisTreatment" label="Gingivitis Treatment" />
			<CheckBox name="advPeriodontalTreatment" label="Adv Periodontal Treatment" />
		</div>
		<CheckBox
			on:change={(e) => {
				// eslint-disable-next-line
				//@ts-ignore
				operativeTreatment = e.target.checked;
			}}
			name="operativeTreatment"
			label="Operative Treatment (put C in () for any complicated case]"
		/>
		{#if operativeTreatment}
			<div class="pl-8">
				<div class="flex gap-2">
					<CheckBox name="" label="Class I" />
					<CheckBox name="" label="Class II" />
					<CheckBox name="" label="Class III" />
					<CheckBox name="" label="Class IV" />
					<CheckBox name="" label="Class V" />
				</div>
				<div class="flex gap-2">
					<CheckBoxOther name="inlayOnlay" label="Inlay/onlay" />
					<CheckBoxOther name="veneer" label="Veneer" />
					<CheckBoxOther name="diastemaClosure" label="Diastema closure" />
				</div>
				<CheckBox name="bleaching" label="Bleaching" />
				<div class="pl-8 flex gap-2">
					<CheckBox name="vital" label="Vital" />
					<CheckBox name="nonvital" label="Non Vital" />
				</div>
			</div>
		{/if}
		<div class="flex gap-2">
			<CheckBoxOther name="endodonticTreatment" label="Endodontic Treatment" />
			<CheckBoxOther name="retreatment" label="Retreatment" />
			<CheckBoxOther name="endoSurg" label="Endo Surg." />
		</div>
		<CheckBox
			name="prostheticTreatment"
			label="Prosthetic Treatment"
			on:change={(e) => {
				// eslint-disable-next-line
				//@ts-ignore
				prostheticTreatment = e.target.checked;
			}}
		/>
		{#if prostheticTreatment}
			<div class="pl-8 flex gap-2 flex-wrap">
				<CheckBox name="removableProsthesis" label="Removable Prosthesis" />
				<CheckBox name="apd" label="APD" />
				<CheckBox name="rpd" label="RPD" />
				<CheckBox name="cd" label="CD" />
				<CheckBox name="fixedProsthesis" label="Fixed Prosthesis" />
				<CheckBoxOther name="crown" label="Crown" />
				<CheckBoxOther name="Post and core" label="Post and core" />
				<CheckBoxOther name="bridge" label="Bridge" />
				<CheckBox name="oralRehabilitation" label="Oral Rehabilitation" />
				<CheckBox name="dentalImplant" label="Dental Implant" />
				<CheckBox name="maxillofacialProsthesis" label="Maxillofacial Prosthesis" />
			</div>
		{/if}
		<CheckBox name="mdAndOrofacialPainTreatment" label="MD and Orofacial Pain Treatment" />
		<CheckBox name="oralAndMaxillofacialSurgery" label="Oral and Maxillofacial Surgery" />
		<CheckBox name="oralMedicineTreatment" label="Oral Medicine Treatment" />
		<CheckBox name="orthodonticTreatment" label="Orthodontic Treatment" />

		<!--

-->
	</div>
	<div class="w-1/3">
		Periodontal Screening & Recording (PSR)
		<table>
			<tr>
				<td><textarea cols="10" rows="2" /></td>
				<td><textarea cols="10" rows="2" /></td>
				<td><textarea cols="10" rows="2" /></td>
			</tr>
			<tr>
				<td><textarea cols="10" rows="2" /></td>
				<td><textarea cols="10" rows="2" /></td>
				<td><textarea cols="10" rows="2" /></td>
			</tr>
		</table>
	</div>
</div>
<div style="height: 600px;">
	<div id="tui-image-editor" />
</div>

<!-- <img src="/exam_service.jpg" alt="" /> -->
<style>
	.alternate-column td {
		border: 1px dotted gray;
		padding: 5px;
	}
</style>
