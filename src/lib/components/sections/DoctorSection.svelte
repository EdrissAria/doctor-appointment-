<script lang="ts">
	import Animate from '$components/app/Animate.svelte';
	import PageSection from '$components/app/PageSection.svelte';
	import Heading from '$components/core/Heading.svelte';
	import Spacer from '$components/core/Spacer.svelte';
	import Text from '$components/core/Text.svelte';

	let { projects = [] } = $props();
</script>

<PageSection class="bg-gradient-to-t from-base-100 to-primary/20 overflow-hidden" container>
	<Heading class="mb-md text-center" level={3} key="featured_projects_title" />
	<Text tag="p" align="center" muted key="featured_projects_description" />
	<Spacer size="xl" />

	<div class="flex flex-col gap-4xl overflow-hidden">
		{#each projects as project, index}
			<Animate animation="fade-{index % 2 === 0 ? 'left' : 'right'}">
				<a
					href={`/projects/${project.slug}`}
					class="block no-underline"
					aria-label={`View details for ${project.title}`}
				>
					<div
						class={`flex flex-col lg:flex-row ${
							index % 2 === 1 ? 'lg:flex-row-reverse' : ''
						} items-center gap-lg lg:gap-5xl`}
					>
						<div class="order-1 w-full lg:order-none lg:w-1/2">
							<img
								src="/files/{project.image}"
								alt={project.title}
								loading="lazy"
								class="h-64 w-full rounded-lg object-cover shadow-lg lg:h-80"
							/>
						</div>

						<div
							class="order-2 flex w-full flex-col gap-y-4 text-center lg:order-none lg:w-1/2 {index %
								2 ===
							1
								? 'lg:text-end'
								: 'lg:text-start'}"
						>
							<Text bold size="xl">{project.title}</Text>
							<Text size="sm" muted>{project.description}</Text>
						</div>
					</div>
				</a>
			</Animate>
		{/each}
	</div>

	<Animate>
		<div class="flex items-center justify-center pt-6xl">
			<a class="lg-button" href="/projects">
				<Text key="project_view_more_button" />
			</a>
		</div>
	</Animate>
</PageSection>
