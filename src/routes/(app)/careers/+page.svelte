<script lang="ts">
	import PageHeader from '$components/app/PageHeader.svelte';
	import PageSection from '$components/app/PageSection.svelte';
	import Seo from '$components/app/Seo.svelte';
	import Text from '$components/core/Text.svelte';
</script>

<Seo
	title="Careers at Veltify"
	metaDescription="Explore career opportunities at Veltify. Join our team of innovative professionals and make a difference in web design and development."
/>

<PageSection container>
	<PageHeader descriptionKey="careers_description" titleKey="careers_title" />

	<div class="html">
		<Text key="careers_content" html />
	</div>
</PageSection>