<script>
	import FaTint from 'svelte-icons/fa/FaTint.svelte';
</script>

<div class="flex flex-col w-full items-center p-2 shadow-md m-2">
	<div class="flex flex-col">
		<div class="flex items-center justify-between mb-2">
			<div class="flex items-center  ">
				<div class="icon">
					<FaTint />
				</div>
				<span class="font-bold"> Blood Pressure </span>
			</div>
			<div class="flex gap-1 items-center">
				<span>Time</span> <input type="time" class="w-32" />
			</div>
		</div>
		<div class="flex gap-2">
			<div class="flex gap-1 items-center">
				<span>High</span> <input class="w-32" type="number" />
			</div>
			<div class="flex gap-1 items-center">
				<span>Low</span> <input class="w-32" type="number" />
			</div>
		</div>
	</div>
</div>

<style>
	.icon {
		width: 40px;
		height: 40px;
		color: red;
	}
</style>
