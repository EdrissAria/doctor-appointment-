<script lang="ts">
	import DevCard from '$components/app/DevCard.svelte';
	import Grid from '$components/app/Grid.svelte';
	import PageHeader from '$components/app/PageHeader.svelte';
	import PageSection from '$components/app/PageSection.svelte';
	import Seo from '$components/app/Seo.svelte';
	import Heading from '$components/core/Heading.svelte';
	import Text from '$components/core/Text.svelte';
	import type { TeamMember } from '$types';

	let {data} = $props()



</script>

<Seo
	title="About Veltify Software Development Team"
	metaDescription="Get to know our company—our mission, vision, and the team behind the innovative solutions we deliver in web design and development."
/>

<PageSection container>
	<PageHeader descriptionKey="about_description" titleKey="about_title" />
	
	<div class="html">
		<Text key="about_content" html />
	</div>
	
<!-- 
	<Grid md="2">
		<div
			class="mx-auto max-w-4xl rounded-lg border-2 border-base-300 bg-base-200 p-8 text-center shadow-lg lg:w-full"
		>
			<h2 class="mb-6 text-3xl font-semibold text-primary-base">Our Mission</h2>
			<p class="mb-4 text-muted">
				Our mission is to empower businesses through technology, building solutions that make a real
				difference. We believe in sustainable growth, continuous innovation, and putting people
				first.
			</p>
		</div>

		<div
			class="mx-auto max-w-4xl rounded-lg border-2 border-base-300 bg-base-200 p-8 text-center shadow-lg lg:w-full"
		>
			<h2 class="mb-4 text-3xl font-semibold text-primary-base">Our Values</h2>
			<ul class="space-y-2 text-muted">
				<li>Integrity and honesty in all our actions</li>
				<li>Commitment to quality and continuous improvement</li>
				<li>Respect and support for our team and clients</li>
				<li>Emphasis on creativity and innovation</li>
			</ul>
		</div>
	</Grid> -->

	<div class="mx-auto w-full text-center">
		<h2 class="m-8 mt-16 text-3xl font-semibold text-primary-base">Meet Our Team</h2>
		<Grid gap="md" sm="2" lg="3">
			{#each data.team as member}
				<DevCard {member} />
			{/each}
		</Grid>
	</div>
</PageSection>
