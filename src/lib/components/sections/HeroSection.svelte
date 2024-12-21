<script>
	import Heading from '$components/core/Heading.svelte';
	import Text from '$components/core/Text.svelte';
	import PageSection from '$lib/components/app/PageSection.svelte';
</script>

<!-- <PageSection container class="h-[90vh] bg-gradient-to-b from-base-100 to-primary/20"> -->
	<section class="bg-teal-700 text-white">
		<div class="container mx-auto flex flex-col md:flex-row items-center px-6 py-12 md:py-24">
		  <!-- Text Content -->
		  <div class="md:w-1/2">
			<p class="text-lg font-light mb-4">We work to take care of your smile</p>
			<h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
			  We are built around your needs with <span class="text-white">digital healthcare</span>
			</h1>
			<p class="text-base font-light leading-relaxed mb-8">
			  Digital health, or digital healthcare, is a broad, multidisciplinary concept that includes concepts from an intersection between technology and healthcare.
			</p>
			<div class="flex space-x-4">
			  <a
				href="/about"
				class="bg-white text-teal-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
			  >
				About Us
			  </a>
			  <a
				href="/services"
				class="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-teal-700 transition"
			  >
				Our Service
			  </a>
			</div>
		  </div>
	  
		  <!-- Image Section -->
		  <div class="md:w-1/2 mt-12 md:mt-0 flex justify-center">
			<img
			  src="/path/to/your/hero-image.svg"
			  alt="Doctor and patient illustration"
			  class="max-w-full h-auto"
			/>
		  </div>
		</div>
	  </section>
	  
<!-- </PageSection> -->
