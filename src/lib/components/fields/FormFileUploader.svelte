<script lang="ts">
	import { Image } from '@unpic/svelte';
	import { customAlphabet } from 'nanoid';

	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const getId = customAlphabet(alphabet, 8);

	let { value = $bindable(), halfWidth = false, name, field, error } = $props();

	let isLoading = $state();
	let inputEl: any = $state(null);

	async function upload(e) {
		isLoading = true;

		if (field.multiple) {
			try {
				for (let file of e.target.files) {
					const formData = new FormData();
					formData.set('file', file);
					const id = getId()
					formData.set('id', id)

					const data = await fetch('/api/files', {
						method: 'PUT',

						body: formData
					}).then(res => res.json());
					value ??= [];
					value.push(id);
				}
			} catch (err) {
				console.error('Error:', err);
			} finally {
				isLoading = false;
			}
		} else {
			// const id = getId();

			try {
				const formData = new FormData();
				formData.set('file', e.target.files[0]);
				const id = getId()
				formData.set('id', id)

				const data = await fetch('/api/files', {
					method: 'PUT',

					body: formData
				}).then((response) => response.json());
				console.log(data)

				value = id;
			} catch (err) {
				console.error('Error:', err);
			} finally {
				isLoading = false;
			}
		}
	}

	function openFileSelector() {
		console.log('inputEl.click', inputEl);
		inputEl.click();
	}

	$inspect(value);
</script>

<div class="flex flex-col {halfWidth ? '' : `sm:col-span-2`}">
	<span class="block text-sm font-medium text-gray-700">
		{field.label}

		{#if field.required}
			<span class=" text-red-500">*</span>
		{/if}
	</span>

	<input
		bind:this={inputEl}
		class="hidden w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
		class:border-red-500={error}
		class:opacity-50={isLoading}
		class:disabled={isLoading}
		multiple={field.multiple}
		{name}
		type="file"
		placeholder="Enter {field.label}"
		onchange={upload}
	/>
	<button
		onclick={openFileSelector}
		type="button"
		class="rounded border border-base-300 px-4 py-4 hover:bg-base-100 hover:text-primary"
	>
		{#if field.multiple}
			Choose Files
		{:else}
			Choose File
		{/if}
	</button>
	{#if field.type == 'image'}
		{#if field.multiple}
			<div class="mt-2 flex gap-2 flex-wrap">
				{#each value ?? [] as item}
					<div class="h-20 w-20">
						<Image
							class="rounded-lg"
							alt={value}
							aspectRatio={1}
							src="/files/{item}"
						/>
					</div>
				{/each}
			</div>
		{:else}
			<div class="h-20 w-20">
				<Image
					class="mt-2 rounded-lg"
					alt={value}
					aspectRatio={1}
					src="/files/{value}"
				/>
			</div>
		{/if}
	{:else if field.multiple}
		<div class="mt-2 flex gap-2">
			{#each value ?? [] as item}
				<span class="rounded-lg bg-primary/20 px-2 py-1 text-primary-base">{item}</span>
			{/each}
		</div>
	{:else}
		<span class="mt-2 bg-primary/20 text-primary-base">{value}</span>
	{/if}
	<span class="h-4 pt-0.5 text-xs text-red-500">{error || ''}</span>
</div>
