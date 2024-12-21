<script lang="ts">
	import Animate from '$components/app/Animate.svelte';
	import Grid from '$components/app/Grid.svelte';
	import PageHeader from '$components/app/PageHeader.svelte';
	import PageSection from '$components/app/PageSection.svelte';
	import ProjectCard from '$components/app/ProjectCard.svelte';
	import Seo from '$components/app/Seo.svelte';

	let {data } = $props();	
</script>


<Seo 
  title="Our Projects - Veltify Software Development Team" 
  metaDescription="Discover our innovative projects and case studies showcasing the Veltify team's expertise in web development, design, and technology solutions." 
  image="/files/{data.projects[0]?.image}"  
/>

<PageSection container>
	<PageHeader titleKey="projects_title" descriptionKey="projects_description" />

	<Grid  md="2" lg="3">
		{#each data.projects as project}
			<Animate>
				<ProjectCard {project} />
			</Animate>
		{/each}
	</Grid>

</PageSection>
