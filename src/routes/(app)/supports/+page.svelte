<script lang="ts">
	import PageHeader from '$components/app/PageHeader.svelte';
	import PageSection from '$components/app/PageSection.svelte';
	import Seo from '$components/app/Seo.svelte';
	import Text from '$components/core/Text.svelte';
</script>

<Seo
	title="Support - Veltify Software Development Team"
	metaDescription="Need help? Veltify support is here to assist you with your queries and concerns regarding our services."
/>

<PageSection container>
	<PageHeader descriptionKey="support_description" titleKey="support_title" />

	<div class="html">
		<Text key="support_content" html />
	</div>
</PageSection>