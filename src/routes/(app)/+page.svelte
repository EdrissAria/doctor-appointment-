<script lang="ts">
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import ProjectSection from '$components/sections/DoctorSection.svelte';
	import ServiceSection from '$lib/components/sections/ServiceSection.svelte';
	import FaqSection from '$components/sections/FaqSection.svelte';
	import Seo from '$components/app/Seo.svelte';
	import AboutSection from '$components/sections/AboutSection.svelte';
	import DoctorSection from '$components/sections/DoctorSection.svelte';
	import BlogSection from '$components/sections/BlogSection.svelte';

	let { data } = $props();
</script>

<Seo
	title="Veltify Software Development - Custom Software & Web Development"
	metaDescription="Looking for expert software development? Veltify delivers innovative, custom solutions that help businesses grow. We turn your vision into reality with precision and speed."
/>
<svelte:head>
	<meta name="google-site-verification" content="1YQeEURndxKuMPclQkmR-ARKRBOrZr6jhroIHfIh7yU" />
</svelte:head>

<main>
	<HeroSection />
	<AboutSection />
	<ServiceSection />
	<DoctorSection />
	<BlogSection />
	<!-- <FaqSection /> -->
</main>
