<script lang="ts">
	import { Button, TabContent, TabHeader, TabItem, TabPanel, Tabs } from 'owls-lib';
	import Form from './Form.svelte';
	import fields from '$components/fields';
	import FormInput from '$components/fields/FormInput.svelte';

	let { config = {}, mode = 'default', errors = {}, value = $bindable() } = $props();

	let activeSection = $state(config.form.sections?.[0].name ?? '');

	function findFirstTabWithError() {
		if (config.form.sections) {
			for (let section of config.form.sections) {
				const formErrors = Object.keys(errors ?? {});

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

<div class="rounded-lg border border-gray-300 p-4 shadow-md">
	<Form {mode} bind:value>
		{#if config.form.fields}
			<div class="grid grid-cols-2 gap-x-4 gap-y-2">
				{#each config.form.fields as fieldName}
					{#if Array.isArray(fieldName)}
						{#each fieldName as name}
							{@const field = config.fields[name]}
							{@render Field(name, field, true)}
						{/each}
					{:else}
						{@const field = config.fields[fieldName]}
						{@render Field(fieldName, field)}
					{/if}
				{/each}
			</div>
			<div class="col-span-2 flex justify-start gap-4 pt-4">
				<Button type="submit">Submit</Button>
				<Button variant="ghost" href={config.backUrl}>Cancel</Button>
			</div>
		{:else if config.form.sections}
			<Tabs bind:active={activeSection}>
				<TabHeader>
					{#each config.form.sections ?? [] as section}
						{@const sectionHidden = section.hidden ? section.hidden({ mode }) : false}
						{@const error = errors
							? section.fields.some((x) => {
									if (typeof x == 'string') return Object.keys(errors).includes(x);
									else {
										for (let key of x) {
											let res = Object.keys(errors).includes(key);
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
					{#each config.form.sections ?? [] as section}
						{@const sectionHidden = section.hidden ? section.hidden({ mode }) : false}
						{@const error = errors
							? section.fields.some((x) => Object.keys(errors).includes(x))
							: false}
						{#if !sectionHidden}
							<TabPanel name={section.name} {error}>
								<div class="grid grid-cols-2 gap-x-4 gap-y-2">
									{#each section.fields as fieldName}
										{#if Array.isArray(fieldName)}
											{#each fieldName as name}
												{@const field = config.fields[name]}
												{@render Field(name, field, true)}
											{/each}
										{:else}
											{@const field = config.fields[fieldName]}
											{@render Field(fieldName, field)}
										{/if}
									{/each}
								</div>
							</TabPanel>
						{/if}
					{/each}
					<div class="col-span-2 flex justify-start gap-4 pt-4">
						<Button type="submit">Submit</Button>
						<Button variant="ghost" href={config.backUrl}>Cancel</Button>
					</div>
				</TabContent>
			</Tabs>
		{/if}
	</Form>
</div>

{#snippet Field(name: string, field: any, halfWidth = false)}
	{@const Component = getComponent(field)}
	{@const hidden = field.hidden ? field.hidden({ mode }) : false}
	{#if !hidden}
		<Component {field} bind:value={value[name]} {halfWidth} {name} error={errors[name]} />
	{/if}
{/snippet}
