<script lang="ts">
	export let name: string;
	export let label: string;
</script>

<div class="flex items-center gap-1">
	<input type="checkbox" {name} id={name} on:change />
	<label for={name}>
		{label}
	</label>
</div>
