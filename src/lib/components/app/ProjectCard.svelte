<script lang="ts">
	import Text from '$components/core/Text.svelte';
	import type { Project } from '$types';
	import { Image } from '@unpic/svelte';

	const { project }: { project: Project } = $props();
</script>

<div
	class="flex h-full flex-col overflow-hidden rounded-lg border-2 border-base-300 bg-base-200 transition-all hover:border-primary hover:-translate-y-1 hover:shadow-xl duration-300"
>
	<a href="/projects/{project.slug}">
		<Image class="h-48 w-full object-cover" src="/files/{project.image}" alt={project.title} />
		<div class="flex flex-1 flex-col p-4">
			<Text bold size="lg">{project.title}</Text>
			<Text muted class="mt-1 flex-1 line-clamp-3">{project.description}</Text>
			{#if project.isFreemium}
				<span
					class="mx-auto mt-2 inline-block rounded bg-primary/20 px-2 py-1 text-xs font-semibold text-primary-base"
				>
					Freemium
				</span>
			{/if}
		</div>
	</a>
	<div class="mt-auto flex justify-center p-4">
		<div class="inline-flex w-full max-w-xs rounded-lg bg-base-200 text-content">
			<a
				href={project.demoLink}
				class="flex-1 rounded-l-lg border border-base-300 bg-base-200 py-2 text-center text-content transition-all hover:bg-base-300/50 
				{project.demoLink ? '' : 'cursor-not-allowed opacity-50 pointer-events-none'}"
				aria-disabled={!project.demoLink}
				>Demo</a
			>
			<a
				href={project.githubLink}
				class="flex-1 rounded-r-lg -ms-px border border-base-300 bg-base-200 py-2 text-center text-content transition-all hover:bg-base-300/50 
				{project.githubLink ? '' : 'cursor-not-allowed opacity-50 pointer-events-none'}"
				aria-disabled={!project.githubLink}
				>GitHub</a
			>
		</div>
	</div>	
</div>