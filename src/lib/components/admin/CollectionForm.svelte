<script lang="ts">
	import { Button, Tabs, TabPanel, TabHeader, TabItem, TabContent } from 'owls-lib';
	import FormInput from '../fields/FormInput.svelte';
	import { page } from '$app/state';
	import Form from '$components/core/Form.svelte';
	import fields from '$components/fields';
	import SidebarToggler from '$components/core/SidebarToggler.svelte';
	import PageHeader from '$components/core/PageHeader.svelte';
	import DynamicForm from '$components/core/DynamicForm.svelte';

	let { form, data, collection } = $props();
	let submitting = $state(false);

	let value = $state(form?.body ?? data.value ?? {});

	let activeSection = $state(collection.form.sections?.[0].name ?? '');

	$effect(() => {
		value = form?.body ?? data.value ?? {};
	});

	function findFirstTabWithError() {
		if (collection.form.sections) {
			for (let section of collection.form.sections) {
				const formErrors = Object.keys(form?.errors ?? {});

				for (let field of section.fields) {
					if (typeof field == 'string') {
						if (formErrors.includes(field)) {
							return section.name;
						}
					} else {
						for (let key of field) {
							if (formErrors.includes(key)) {
								return section.name;
							}
						}
					}
				}
			}
		}
		return '';
	}

	$effect(() => {
		const tabWithError = findFirstTabWithError();

		if (tabWithError) {
			activeSection = tabWithError;
		}
	});

	function getComponent(field: any) {
		if (field.type === 'custom') {
			return field.formComponent;
		}

		const fieldType = fields[field.type];
		return fieldType.form ?? FormInput;
	}
</script>

<PageHeader
	backUrl="/admin/{collection.name}"
	title={data.mode === 'insert'
		? `Add New ${collection.singular}`
		: `Update ${collection.singular}`}
/>

<DynamicForm
	config={{
		fields: collection.fields,
		form: collection.form,
		backUrl: `/admin/${collection.name}`
	}}
	bind:value
	errors={form?.errors}
	mode={data.mode}
/>
<!-- 
<div class="rounded-lg border border-gray-300 p-4 shadow-md">
	<Form mode={data.mode} bind:value action={page.url.pathname}>
		{#if collection.form.fields}
			<div class="grid grid-cols-2 gap-x-4 gap-y-2">
				{#each collection.form.fields as fieldName}
					{#if Array.isArray(fieldName)}
						{#each fieldName as name}
							{@const field = collection.fields[name]}
							{@render Field(name, field, true)}
						{/each}
					{:else}
						{@const field = collection.fields[fieldName]}
						{@render Field(fieldName, field)}
					{/if}
				{/each}
			</div>
			<div class="col-span-2 flex justify-start gap-4 pt-4">
				<Button type="submit">Submit</Button>
				<Button variant="ghost" href="/admin/{collection.name}">Cancel</Button>
			</div>
		{:else if collection.form.sections}
			<Tabs bind:active={activeSection}>
				<TabHeader>
					{#each collection.form.sections ?? [] as section}
						{@const sectionHidden = section.hidden ? section.hidden({ mode: data.mode }) : false}
						{@const error = form?.errors
							? section.fields.some((x) => {
									if (typeof x == 'string') return Object.keys(form.errors).includes(x);
									else {
										for (let key of x) {
											let res = Object.keys(form.errors).includes(key);
											if (res) return true;
										}
									}
								})
							: false}
						{#if !sectionHidden}
							<TabItem {error} name={section.name} />
						{/if}
					{/each}
				</TabHeader>

				<TabContent>
					{#each collection.form.sections ?? [] as section}
						{@const sectionHidden = section.hidden ? section.hidden({ mode: data.mode }) : false}
						{@const error = form?.errors
							? section.fields.some((x) => Object.keys(form.errors).includes(x))
							: false}
						{#if !sectionHidden}
							<TabPanel name={section.name} {error}>
								<div class="grid grid-cols-2 gap-x-4 gap-y-2">
									{#each section.fields as fieldName}
										{#if Array.isArray(fieldName)}
											{#each fieldName as name}
												{@const field = collection.fields[name]}
												{@render Field(name, field, true)}
											{/each}
										{:else}
											{@const field = collection.fields[fieldName]}
											{@render Field(fieldName, field)}
										{/if}
									{/each}
								</div>
							</TabPanel>
						{/if}
					{/each}
					<div class="col-span-2 flex justify-start gap-4 pt-4">
						<Button type="submit">Submit</Button>
						<Button variant="ghost" href="/admin/{collection.name}">Cancel</Button>
					</div>
				</TabContent>
			</Tabs>
		{/if}
	</Form>
</div>

{#snippet Field(name: string, field: any, halfWidth = false)}
	{@const Component = getComponent(field)}
	{@const hidden = field.hidden ? field.hidden({ mode: data.mode }) : false}
	{#if !hidden}
		<Component {field} bind:value={value[name]} {halfWidth} {name} error={form?.errors[name]} />
	{/if}
{/snippet} -->
