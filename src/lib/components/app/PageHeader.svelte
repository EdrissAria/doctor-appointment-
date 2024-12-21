<script>
	import Heading from '$components/core/Heading.svelte';
	import Spacer from '$components/core/Spacer.svelte';
	import Text from '$components/core/Text.svelte';

	let { title = undefined, description = undefined, titleKey = undefined, descriptionKey = undefined } = $props();
</script>

<Heading level={2} align="center" key={titleKey} children={title} />
<Spacer size="md" />
<Text key={descriptionKey} children={description} tag="p" align="center" size="lg" muted class="mx-auto max-w-2xl" />
<Spacer size="2xl" />
