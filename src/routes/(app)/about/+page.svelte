<script>
	// Example data for the About Page
	const teamMembers = [
	  {
		name: 'Dr. John Doe',
		role: 'Cardiologist',
		image: '/path-to-doctor1.jpg',
	  },
	  {
		name: 'Dr. Emily White',
		role: 'Pediatrician',
		image: '/path-to-doctor2.jpg',
	  },
	  {
		name: 'Dr. Sarah Johnson',
		role: 'Dermatologist',
		image: '/path-to-doctor3.jpg',
	  },
	];
  </script>
  
  <section class="py-16 bg-white">
	<!-- Hero Section -->
	<div class="bg-teal-800 text-white py-16">
	  <div class="container mx-auto px-6 text-center">
		<h1 class="text-4xl font-bold">About Us</h1>
		<p class="text-lg mt-4">
		  Learn more about our mission, values, and the dedicated team working to provide the best healthcare services.
		</p>
	  </div>
	</div>
  
	<!-- Mission Section -->
	<div class="container mx-auto px-6 py-12">
	  <div class="flex flex-col lg:flex-row items-center">
		<div class="lg:w-1/2">
		  <img
			src="/path-to-mission-image.jpg"
			alt="Mission Image"
			class="rounded-lg shadow-lg w-full"
		  />
		</div>
		<div class="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
		  <h2 class="text-3xl font-bold text-teal-800">Our Mission</h2>
		  <p class="text-gray-600 mt-4">
			Our mission is to provide accessible, high-quality healthcare solutions that address the unique needs of every individual. We strive to bring innovation, care, and excellence to the forefront of healthcare.
		  </p>
		  <ul class="mt-6 space-y-3">
			<li class="flex items-center">
			  <span class="text-teal-800 text-xl font-bold">✓</span>
			  <span class="ml-4 text-gray-600">Compassionate patient care</span>
			</li>
			<li class="flex items-center">
			  <span class="text-teal-800 text-xl font-bold">✓</span>
			  <span class="ml-4 text-gray-600">Innovative healthcare solutions</span>
			</li>
			<li class="flex items-center">
			  <span class="text-teal-800 text-xl font-bold">✓</span>
			  <span class="ml-4 text-gray-600">Dedicated and experienced team</span>
			</li>
		  </ul>
		</div>
	  </div>
	</div>
  
	<!-- Team Section -->
	<div class="bg-gray-100 py-12">
	  <div class="container mx-auto px-6">
		<div class="text-center mb-8">
		  <h2 class="text-3xl font-bold text-teal-800">Meet Our Team</h2>
		  <p class="text-gray-600 mt-2">
			Our dedicated team of healthcare professionals is here to serve you.
		  </p>
		</div>
  
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		  {#each teamMembers as member}
			<div class="bg-white shadow-lg rounded-lg overflow-hidden">
			  <img
				src={member.image}
				alt={member.name}
				class="w-full h-60 object-cover"
			  />
			  <div class="p-6 text-center">
				<h3 class="text-lg font-bold text-teal-800">{member.name}</h3>
				<p class="text-gray-600">{member.role}</p>
			  </div>
			</div>
		  {/each}
		</div>
	  </div>
	</div>
  </section>
  