<script>
	import TextBox from './_TextBox.svelte'
	import SelectBox from './_SelectBox.svelte'
	import { _ } from 'svelte-i18n'
</script>
<div class='flex'>
	<div class='w-1/3'>
		<TextBox label={$_('postalCode')}/>
	</div>

	<div class='w-2/3'>
		<SelectBox label={$_('subdistrict')}/>
	</div>
</div>
