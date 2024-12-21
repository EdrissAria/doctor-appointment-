<script lang="ts">
	import Animate from '$components/app/Animate.svelte';
	import BlogCard from '$components/app/BlogCard.svelte';
	import Grid from '$components/app/Grid.svelte';
	import PageHeader from '$components/app/PageHeader.svelte';
	import PageSection from '$components/app/PageSection.svelte';
	import Seo from '$components/app/Seo.svelte';
	import Spacer from '$components/core/Spacer.svelte';
	import Text from '$components/core/Text.svelte';

	let { data } = $props();
</script>

<Seo
	title="Veltify blog"
	metaDescription="Explore the latest articles, insights, and tips on web development, design, and technology from the Veltify team."
	image="/files/{data.blogs[0]?.image}"
/>
<PageSection container>
	<PageHeader titleKey="blogs_title" descriptionKey="blogs_description" />

	<form method="POST">
		<div class="relative mx-auto flex max-w-md justify-center">
			<input
				type="email"
				name="email"
				placeholder="you@domain.com"
				class="w-full rounded-md border border-base-300 bg-base-200 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-base"
				required
			/>
			<button class="absolute inset-y-1 end-1 rounded-md bg-primary-base px-6 text-primary-content">
				Subscribe
			</button>
		</div>
	</form>
	<Spacer size="3xl" />
	<Grid md="2" lg="3">
		{#each data.blogs as blog}
			<Animate>
				<BlogCard {blog} />
			</Animate>
		{/each}
	</Grid>
</PageSection>
