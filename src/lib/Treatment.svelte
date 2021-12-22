<script>
	import { _ } from 'svelte-i18n';
	import RadioBox from './_RadioBox.svelte';
	import SelectBox from './_SelectBox.svelte';
	import TextBox from './_TextBox.svelte';
	let purposeOfVisit = '';
	let triange = '';
	let infectionRiskAssessment = '';
	let anticoagulantMedicines = '';
</script>

{$_('treatmentRight')}
<SelectBox />

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

<TextBox label={$_('generalAppearance')} />
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
