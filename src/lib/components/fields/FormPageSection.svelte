<script lang="ts">
	import { Button } from 'owls-lib';
	import FormInput from './FormInput.svelte';

	let { value = $bindable([]), halfWidth = false, name, field, error } = $props();

	let addSectionModalOpen = $state(false);

	function addSection() {
		addSectionModalOpen = true;
	}

	function cancelAddSection() {
		addSectionModalOpen = false;
	}

	function nextAddSection() {
		addSectionModalOpen = false;
		value = [{type: 'HeroSection', props: {}}];
	}
</script>

<div class="flex flex-col {halfWidth ? '' : `sm:col-span-2`}">
	<span class="block text-sm font-medium text-gray-700">
		{field.label}

		{#if field.required}
			<span class=" text-red-500">*</span>
		{/if}
	</span>

	{#each value ?? [] as section}
		<div>Section {section.type}</div>
	{/each}

	<div class="flex w-full items-center justify-center p-8">
		<Button onclick={addSection} type="button" variant="secondary">Add section</Button>
	</div>

	<span class="h-4 pt-0.5 text-xs text-red-500">{error || ''}</span>
</div>

{#if addSectionModalOpen}
	<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
		<div class="w-full max-w-[500px] rounded-lg border bg-white">
			<h1 class="border-b bg-gray-50 px-6 py-4 text-lg font-bold">Add Section</h1>
			<div class="px-6 py-4">List of available sections</div>

			<div class="flex justify-end gap-2 bg-gray-50 p-4">
				<Button onclick={cancelAddSection} type="button" variant="ghost">Cancel</Button>
				<Button onclick={nextAddSection} type="button" variant="primary">Next</Button>
			</div>
		</div>
	</div>
{/if}

<input type="hidden" {name} value={JSON.stringify(value)} />