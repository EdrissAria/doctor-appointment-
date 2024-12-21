<script lang="ts">
	import Grid from '$components/app/Grid.svelte';
	import ImageSwiper from '$components/app/ImageSwiper.svelte';
	import PageHeader from '$components/app/PageHeader.svelte';
	import PageSection from '$components/app/PageSection.svelte';
	import Seo from '$components/app/Seo.svelte';
	import Spacer from '$components/core/Spacer.svelte';
	import Text from '$components/core/Text.svelte';
	import type { ProjectDetail } from '$types';
	import { Image } from '@unpic/svelte';

	let { data } = $props();
</script>

<Seo
	title="{data.project.title} - A Veltify Project"
	metaDescription="{data.project.description} using technologies like {data.project.technologies}"
	image="/files/{data.project.image}"
/>

<PageSection container>
	<PageHeader>
		{#snippet title()}
			{data.project.title}
		{/snippet}
		{#snippet description()}
			{data.project.description}
		{/snippet}
	</PageHeader>
	<Spacer size="4xl" />

	<div class="relative">
		<Image
			src="/files/{data.project.image}"
			alt={data.project.title}
			aspectRatio="16 / 9"
			class="mx-auto w-full max-w-4xl rounded-lg shadow-lg"
		/>
	</div>
	<Spacer size="4xl" />
	<div
		class="html"
	>
		{@html data.project.content}
	</div>

	<div class="mt-12 text-center">
		<h2 class="text-2xl font-semibold text-muted">
			<Text key="project_detail_technologies_title" />
		</h2>
		<ul class="mt-4 flex flex-wrap justify-center gap-4">
			{#each (data.project.technologies ?? '').split(',').map((x: any) => x.trim()) as tech}
				<li class="rounded-md bg-primary-base/10 px-4 py-2 font-bold text-primary-base">
					{tech}
				</li>
			{/each}
		</ul>
	</div>

	<div>
		<h2 class="my-12 text-center text-2xl font-semibold text-muted">
			<Text key="project_detail_screenshots_title" />
		</h2>
		<!-- <Grid sm="2" lg="3"> -->
		<ImageSwiper images={data.project.screenshots}/>

			<!-- {#each data.project.screenshots as screenshot}
				<div class="group relative">
					<Image
						src="/files/{screenshot}"
						alt={`Screenshot of ${data.project.title}`}
						class="h-full w-full max-w-xs transform rounded-lg object-cover shadow-lg transition-transform duration-300 group-hover:scale-105 md:max-w-md lg:max-w-lg"
					/>
				</div>
			{/each} -->
		<!-- </Grid> -->
	</div>

	<div class="mt-8 flex flex-row flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 text-center">
		{#if data.project.demoLink}
			<a
				href={data.project.demoLink}
				class="inline-block rounded-md border border-base-400 bg-primary px-8 py-2 text-sm font-semibold text-primary-content shadow hover:bg-primary-hover
			md:px-10 md:py-3 md:text-base lg:px-12 lg:py-4 lg:text-lg"
			>
				Demo
			</a>
		{/if}
		{#if data.project.githubLink}
			<a
				href={data.project.githubLink}
				class="inline-block rounded-md border border-base-300 bg-base-200 px-8 py-2 text-sm font-semibold text-content shadow hover:bg-base-300/50
			md:px-10 md:py-3 md:text-base lg:px-12 lg:py-4 lg:text-lg"
			>
				GitHub
			</a>
		{/if}
	</div>
</PageSection>
