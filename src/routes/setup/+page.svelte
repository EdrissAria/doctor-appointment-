<script lang="ts">
	import '$src/app.admin.css';
	import Form from '$components/core/Form.svelte';
	import { Button } from 'owls-lib';

	let { data, form } = $props();

	let value = $state(form?.body ?? {});
</script>

<div class="flex h-dvh items-center justify-center">
	<div class="border w-full max-w-sm border-base-300 bg-base-200 text-content">
		<div class="p-4">
			<h1 class="text-2xl font-bold">Setup site</h1>
		</div>
		<div class="p-4">
			<Form bind:value mode="login" method="POST">
				<label class="flex flex-col">
					<span class="block text-sm font-medium text-gray-700">
						Name
						<span class=" text-red-500">*</span>
					</span>

					<input
						class=" block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
						class:border-red-500={form?.errors.name}
						required
						name="name"
						placeholder="Enter your name"
						bind:value={value.name}
					/>
					<span class="h-4 pt-0.5 text-xs text-red-500">{form?.errors.name || ''}</span>
				</label>
				<label class="flex flex-col">
					<span class="block text-sm font-medium text-gray-700">
						Username
						<span class=" text-red-500">*</span>
					</span>

					<input
						class=" block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
						class:border-red-500={form?.errors.username}
						required
						name="username"
						placeholder="Enter your username"
						bind:value={value.username}
					/>
					<span class="h-4 pt-0.5 text-xs text-red-500">{form?.errors.username || ''}</span>
				</label>
				<label class="flex flex-col mt-4">
					<span class="block text-sm font-medium text-gray-700">
						Password
						<span class=" text-red-500">*</span>
					</span>

					<input
						class=" block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
						class:border-red-500={form?.errors.password}
						required
						type="password"
						name="password"
						placeholder="Enter your password"
						bind:value={value.password}
					/>
					<span class="h-4 pt-0.5 text-xs text-red-500">{form?.errors.password || ''}</span>
				</label>
				<Button type="submit" class="w-full mt-4">Create site</Button>
			</Form>
		</div>
	</div>
</div>
