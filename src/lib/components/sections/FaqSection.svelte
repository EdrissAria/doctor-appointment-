<script lang="ts">
	import Animate from '$components/app/Animate.svelte';
	import Heading from '$components/core/Heading.svelte';
	import NAccordion from '$components/core/Faq.svelte';
	import Spacer from '$components/core/Spacer.svelte';
	import Text from '$components/core/Text.svelte';
	import Faq from '$components/core/Faq.svelte';
	import PageSection from '$components/app/PageSection.svelte';
</script>

<PageSection class="bg-gradient-to-t from-base-100 to-primary/20" container>
	<div class="container mx-auto flex flex-col gap-12 px-4 lg:flex-row">
		<div class="my-auto flex-1 text-center lg:text-start">
			<Animate>
				<Heading level={3} key="faq_title" />
				<Spacer size="sm" />
				<Text tag="p" muted size="lg" key="faq_description" />
			</Animate>
		</div>
		<div class="flex-1">
			<Animate>
				<Faq />
			</Animate>
		</div>
	</div>
</PageSection>
