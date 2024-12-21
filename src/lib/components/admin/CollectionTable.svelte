<script lang="ts">
	import { Button } from 'owls-lib';
	import DeleteConfirm from '$lib/components/admin/DeleteConfirm.svelte';
	import fields from '$components/fields';
	import TableText from '../fields/TableText.svelte';
	import Icon from '$components/core/Icon.svelte';
	import icons from '$src/lib/constants/icons';
	import SidebarToggler from '$components/core/SidebarToggler.svelte';

	let { collection, data } = $props();

	let confirmOpen = $state(false);
	let current: any = $state(null);

	function getComponent(field: any) {
		const fieldType = fields[field.type];
		return fieldType.table ?? TableText;
	}

	function openDeleteConfirm(item) {
		current = item;
		confirmOpen = true;
	}

	function onclose() {
		confirmOpen = false;
		current = null;
	}

	$effect(() => {
		if (!confirmOpen) {
			current = null;
		}
	});
</script>

<div class="flex items-center justify-between gap-2 py-4">
	<SidebarToggler />
	<h1 class="flex-1 text-2xl font-bold text-gray-800">{collection.plural}</h1>
	<Button variant="primary" href="/admin/{collection.name}/insert">
		<Icon name="lucideCirclePlus" />
		Add New {collection.singular}
	</Button>
</div>

{#if false}
	<!-- Filter and Actions -->
	<div class="flex items-center gap-4 pb-4 pt-4">
		<!-- Search Filter -->
		<div class="relative">
			<input
				type="text"
				placeholder="Filter tasks..."
				class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
			/>
		</div>

		<!-- Status Filter -->
		<button
			class="inline-flex items-center rounded-md border border-dashed border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
		>
			<Icon {icons} name="lucideCirclePlus" />
			<span class="ms-2">Status</span>
		</button>

		<!-- Priority Filter -->
		<button
			class="inline-flex items-center rounded-md border border-dashed border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
		>
			<Icon {icons} name="lucideCirclePlus" />
			<span class="ms-2">Priority</span>
		</button>

		<!-- View Button -->
		<button
			class="ms-auto inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-gray-50"
		>
			<span class="me-2">V</span>View
		</button>
	</div>
{/if}

<div class="relative w-full overflow-auto rounded-lg">
	{#if data.items.length > 0}
		<table class="min-w-full border-collapse border border-gray-200 text-sm">
			<thead class="overflow-hidden bg-gray-100">
				<tr>
					{#each collection.table?.columns as fieldName}
						{@const field = collection.fields[fieldName]}
						{@const hidden = field.hidden ? field.hidden({ mode: 'list' }) : false}
						{#if !hidden}
							<th class="h-12 border-b border-gray-300 px-4 text-start font-medium text-gray-700">
								{field.label}
							</th>
						{/if}
					{/each}
					<th class="h-12 w-0 border-b border-gray-300 px-4"></th>
				</tr>
			</thead>
			<tbody>
				{#each data.items as item}
					<tr class="border-b border-gray-200 hover:bg-gray-50">
						{#each collection.table?.columns as fieldName}
							{@const field = collection.fields[fieldName]}
							{@const Component = getComponent(field)}
							{@const hidden = field.hidden ? field.hidden({ mode: 'list' }) : false}
							{#if !hidden}
								<td class="whitespace-nowrap p-4 align-middle">
									<Component {field} value={item[fieldName]} />
								</td>
							{/if}
						{/each}
						<td class="p-4 align-middle">
							<div class="flex gap-2">
								<Button variant="secondary" href="/admin/{collection.name}/update?id={item.id}">
									Edit
								</Button>
								<Button variant="destructive" onclick={() => openDeleteConfirm(item)}>Delete</Button
								>
							</div>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{:else}
		<div
			class="flex flex-col items-center justify-center rounded-lg border border-dashed py-20 text-center"
		>
			<!-- <img src="/icons/empty-state.svg" alt="No data" class="mb-4 h-24 w-24" /> -->
			<h2 class="text-lg font-semibold text-gray-700">No records found</h2>
			<p class="mb-6 mt-2 text-sm text-gray-500">
				It seems there is no data available. Click "Add New {collection.singular}" to create a new
				record.
			</p>
			<Button href="/admin/{collection.name}/insert">
				<Icon name="lucideCirclePlus" />

				Add New {collection.singular}
			</Button>
		</div>
	{/if}
</div>

{#if false}
	<div class="flex items-center justify-between p-4">
		<span>0 of 100 row(s) selected.</span>
		<div>Rows per page 10(dropdown) Page 1 of 10 (buttons)</div>
	</div>
{/if}

<DeleteConfirm bind:open={confirmOpen} id={current?.id} {onclose} />
