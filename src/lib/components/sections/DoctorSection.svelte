<script>
	const doctors = [
	  {
		name: 'Dr. John Doe',
		specialization: 'Cardiologist',
		image: '/path-to-doctor1.jpg',
	  },
	  {
		name: 'Dr. Jane Smith',
		specialization: 'Neurologist',
		image: '/path-to-doctor2.jpg',
	  },
	  {
		name: 'Dr. Emily White',
		specialization: 'Pediatrician',
		image: '/path-to-doctor3.jpg',
	  },
	  {
		name: 'Dr. Michael Brown',
		specialization: 'Orthopedic Surgeon',
		image: '/path-to-doctor4.jpg',
	  },
	  {
		name: 'Dr. Sarah Johnson',
		specialization: 'Dermatologist',
		image: '/path-to-doctor5.jpg',
	  },
	];
  </script>
  
  <section class="py-16 bg-white">
	<div class="container mx-auto px-6">
	  <!-- Section Header -->
	  <div class="text-center mb-12">
		<h2 class="text-3xl font-bold text-teal-800">Meet Our Doctors</h2>
		<p class="text-gray-600 mt-2">
		  Our team of expert doctors is here to provide you with the best care.
		</p>
	  </div>
  
	  <!-- Doctor Grid -->
	  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each doctors as doctor}
		  <div class="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
			<img
			  src={doctor.image}
			  alt={doctor.name}
			  class="w-full h-60 object-cover"
			/>
			<div class="p-6 text-center">
			  <h3 class="text-lg font-bold text-teal-800">{doctor.name}</h3>
			  <p class="text-gray-600 mt-1">{doctor.specialization}</p>
			</div>
		  </div>
		{/each}
	  </div>
	</div>
  </section>
  