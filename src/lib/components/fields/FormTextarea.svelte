<script lang="ts">
	let { value = $bindable(), halfWidth = false, field, error, name } = $props();
</script>

<label class="flex flex-col {halfWidth ? '' : `sm:col-span-2`}">
	<span class="block text-sm font-medium text-gray-700"
		>{field.label}

		{#if field.required}
			<span class=" text-red-500">*</span>
		{/if}
	</span>

	<textarea
		{name}
		placeholder="Enter {field.label}"
		rows="5"
		class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
		class:border-red-500={error}
		bind:value
	>
	</textarea>
	<span class="h-4 pt-0.5 text-xs text-red-500">{error || ''}</span>
</label>
