<script lang="ts">
	import Item from './NAccordion/index.svelte';
	const demoData = [
		{
			title: 'What services does Veltify provide?',
			description:
				'At Veltify, we offer comprehensive web design and development services, including crafting user-friendly websites with React, Svelte, Laravel, and other modern technologies. Our portfolio also includes database management systems, content management systems with drag-and-drop functionality, and mobile apps like gym management and movie-related apps.'
		},
		{
			title: 'Why should I choose Veltify for my website project?',
			description:
				'Veltify stands out for its commitment to quality, innovation, and user-centric designs. We specialize in creating responsive, visually appealing websites with a focus on performance and functionality, tailored to meet your unique business needs.'
		},
		{
			title: 'Do you showcase your work on your website?',
			description:
				'Yes, our Highlighted Work section showcases a curated list of our standout projects. It includes details about the technologies used and how our solutions helped meet our clients goals.'
		}
	];
</script>

<div class="space-y-4">
	{#each demoData as { title, description }}
		<Item {title} {description} />
	{/each}
</div>
