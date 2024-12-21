<script lang="ts">
	import Icon from '$components/core/Icon.svelte';
	import Text from '$components/core/Text.svelte';
	import type { Service } from '$types';

	const { service }: { service: Service } = $props();
</script>

<div
	class="flex gap-md sm:flex-col cursor-pointer rounded-lg border border-base-300 bg-base-200 p-6 text-start transition-all hover:-translate-y-0.5 hover:shadow-xl dark:hover:border-base-400"
>

	<Text size="xl" class="technology-icon text-primary-base group-hover:text-content">
		{@html service.icon}
	</Text>
	<div class="flex flex-col gap-md">
		<Text tag="h4" size="lg" bold>{service.title}</Text>
		<Text muted size="sm">{service.description}</Text>
	</div>
</div>
