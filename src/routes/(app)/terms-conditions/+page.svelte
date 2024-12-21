<script lang="ts">
	import PageHeader from '$components/app/PageHeader.svelte';
	import PageSection from '$components/app/PageSection.svelte';
	import Seo from '$components/app/Seo.svelte';
	import Text from '$components/core/Text.svelte';
</script>

<Seo
	title="Terms and Conditions - Veltify Software Development Team"
	metaDescription="Read the terms and conditions for using Veltify services and website. Understand your rights and responsibilities."
/>

<PageSection container>
	<PageHeader descriptionKey="terms_description" titleKey="terms_title" />

	<div class="html">
		<Text key="terms_content" html />
	</div>
</PageSection>