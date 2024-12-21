<script lang="ts">
	let { value = $bindable(), halfWidth = false, name, field, error } = $props();

	function getText(item: any) {
		if (typeof item === 'string' || typeof item === 'number') {
			return item;
		}

		return item.text;
	}

	function getValue(item: any) {
		if (typeof item === 'string' || typeof item === 'number') {
			return item;
		}

		return item.value;
	}

	function isSelected(item: any) {
		if (typeof item === 'string' || typeof item === 'number') {
			return value == item;
		}

		return value == item.value;
	}
</script>

<label class="flex flex-col {halfWidth ? '' : `sm:col-span-2`}">
	<span class="block text-sm font-medium text-gray-700"
		>{field.label}

		{#if field.required}
			<span class=" text-red-500">*</span>
		{/if}
	</span>

	<select
		class=" block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm bg-white"
		class:border-red-500={error}
		{name}
		bind:value
	>
		<option selected value={null} hidden disabled>Choose {field.label}</option>
		{#each field.items as item}
			<option selected={isSelected(item)} value={getValue(item)}>{getText(item)}</option>
		{/each}
	</select>
	<span class="h-4 pt-0.5 text-xs text-red-500">{error || ''}</span>
</label>
