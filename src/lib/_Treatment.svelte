<script>
	import { _ } from 'svelte-i18n';
	import RadioBox from './_RadioBox.svelte';
	import SelectBox from './_SelectBox.svelte';
	import TextBox from './_TextBox.svelte';

	import FaWeight from 'svelte-icons/fa/FaWeight.svelte';
	import FaRulerVertical from 'svelte-icons/fa/FaRulerVertical.svelte';
	import FaWeightHanging from 'svelte-icons/fa/FaWeightHanging.svelte';
	import FaTemperatureLow from 'svelte-icons/fa/FaTemperatureLow.svelte';
	import FaHeartbeat from 'svelte-icons/fa/FaHeartbeat.svelte';
	import TiWaves from 'svelte-icons/ti/TiWaves.svelte';

	import TreatmentItem from './_TreatmentItem.svelte';
	import Bp from './_Bp.svelte';
	let purposeOfVisit = '';
	let triange = '';
	let infectionRiskAssessment = '';
	let anticoagulantMedicines = '';
</script>

<div class="flex">
	<div class="flex-1">
		<span class="">{$_('treatmentRight')}</span>
		<SelectBox />

		<hr class="my-1" />
		{$_('purposeOfVisit')}
		<p>
			<RadioBox
				name="purposeOfVisit"
				bind:group={purposeOfVisit}
				id={'emergency'}
				label={$_('emergency')}
				value="emergency"
			/>
			<RadioBox
				name="purposeOfVisit"
				bind:group={purposeOfVisit}
				id={'walkIn'}
				label={$_('walkIn')}
				value="walkIn"
			/>
			<RadioBox
				name="purposeOfVisit"
				bind:group={purposeOfVisit}
				id={'appointed'}
				label={$_('appointed')}
				value="appointed"
			/>
		</p>

		<hr class="my-1" />
		{$_('triage')}
		<p>
			<RadioBox
				name="triange"
				bind:group={triange}
				id={'bleeding'}
				label={$_('bleeding')}
				value="bleeding"
			/>
			<RadioBox
				name="triange"
				bind:group={triange}
				id={'orofacialTrauma'}
				label={$_('orofacialTrauma')}
				value="orofacialTrauma"
			/>
			<RadioBox name="triange" bind:group={triange} id={'non'} label={$_('non')} value="non" />
			<RadioBox
				name="triange"
				bind:group={triange}
				id={'acutePain'}
				label={$_('acutePain')}
				value="acutePain"
			/>
			<RadioBox
				name="triange"
				bind:group={triange}
				id={'swelling'}
				label={$_('swelling')}
				value="swelling"
			/>
		</p>

		<hr class="my-1" />
		<TextBox label={$_('generalAppearance')} />
		<hr class="my-1" />
		{$_('infectionRiskAssessment')}
		<p>
			<RadioBox
				name="infectionRiskAssessment"
				bind:group={infectionRiskAssessment}
				id={'infectionRiskAssessmentYes'}
				label={$_('yes')}
				value="yes"
			/>
			<RadioBox
				name="infectionRiskAssessment"
				bind:group={infectionRiskAssessment}
				id={'infectionRiskAssessmentNo'}
				label={$_('no')}
				value="no"
			/>
		</p>
		<hr class="my-1" />
		{$_('anticoagulantMedicines ')}
		<p>
			<RadioBox
				name="anticoagulantMedicines"
				bind:group={anticoagulantMedicines}
				id={'anticoagulantMedicinesNo'}
				label={$_('no')}
				value="no"
			/>
			<RadioBox
				name="anticoagulantMedicines"
				bind:group={anticoagulantMedicines}
				id={'anticoagulantMedicinesYes'}
				label={$_('yes')}
				value="yes"
			/>
			<TextBox label={$_('name')} />
		</p>
	</div>
	<div class="flex flex-1 flex-col">
		<div class="flex flex-1 flex-wrap gap-1 justify-center">
			<TreatmentItem label="bw(kg)">
				<div class="icon">
					<FaWeight />
				</div>
			</TreatmentItem>
			<TreatmentItem label="ht(cm)">
				<div class="icon">
					<FaRulerVertical />
				</div>
			</TreatmentItem>
			<TreatmentItem label="BMI">
				<div class="icon">
					<FaWeightHanging />
				</div>
			</TreatmentItem>
			<TreatmentItem label="T(°C)">
				<div class="icon">
					<FaTemperatureLow />
				</div>
			</TreatmentItem>
			<TreatmentItem label="P(BPM)">
				<div class="icon">
					<FaHeartbeat />
				</div>
			</TreatmentItem>
			<TreatmentItem label="R(/min)">
				<div class="icon">
					<TiWaves />
				</div></TreatmentItem
			>
			<!-- <TreatmentItem label="Time" />
		<TreatmentItem label="BP(mmHG)" /> -->
		</div>
		<div class="flex flex-1">
			<Bp />
		</div>
	</div>
</div>

<style>
	.icon {
		color: rgb(48, 41, 41);
		width: 40px;
		height: 40px;
		margin-bottom: 10px;
	}
</style>
