<script lang="ts">
	import PageHeader from '$components/app/PageHeader.svelte';
	import PageSection from '$components/app/PageSection.svelte';
	import Seo from '$components/app/Seo.svelte';
	import Text from '$components/core/Text.svelte';
</script>

<Seo
	title="Privacy Policy - Veltify"
	metaDescription="Learn how Veltify protects your data and ensures your privacy when using our services."
/>

<PageSection container>
	<PageHeader descriptionKey="privacy_policy_description" titleKey="privacy_policy_title" />

	<div class="html">
		<Text key="privacy_policy_content" html />
	</div>
</PageSection>
