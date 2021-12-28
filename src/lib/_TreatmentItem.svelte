<script lang="ts">
	export let label = '';
</script>

<div class="p-2 flex flex-col justify-center items-center shadow-md  w-40">
	<slot />
	<input type="text" class="w-20 border-gray-400" />
	<div class="text-sm text-gray-600">
		{label}
	</div>
</div>
