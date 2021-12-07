<script>
	import ButtonGreen from './_ButtonGreen.svelte';
	import ButtonBlue from './_ButtonBlue.svelte';
	import ButtonRed from './_ButtonRed.svelte';
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	const dispatcher = createEventDispatcher();
	const save = () => {
		dispatcher('save');
	};
	const reset = () => {
		dispatcher('reset');
	};
</script>

<div class="flex flex-row justify-between">
	<div>
		<ButtonGreen on:click={save}><i class="lni lni-save" /> {$_('save')}</ButtonGreen>
		<ButtonRed on:click={reset}><i class="lni lni-archive" /> {$_('reset')}</ButtonRed>
	</div>
	<div class="justify-self-end ">
		<ButtonBlue
			on:click={() => {
				history.back();
			}}
		>
			<i class="lni lni-backward" />
			{$_('return')}</ButtonBlue
		>
	</div>
</div>
