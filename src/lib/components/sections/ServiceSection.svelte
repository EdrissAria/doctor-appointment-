<script lang="ts">
	export let services = [
	  {
		title: 'Expert Doctor',
		description:
		  'You will often study doctors, but most doctors have extra expertise in a type of medicine or medicine-based field.',
		icon: '👩‍⚕️',
	  },
	  {
		title: 'Medicine',
		description: 'They care for people who are critically ill or injured.',
		icon: '💊',
	  },
	  {
		title: 'Cardiology',
		description: 'They’re experts on the heart and blood vessels.',
		icon: '❤️',
	  },
	  {
		title: 'Neurology',
		description: 'They use X-rays, ultrasounds, and other imaging tech.',
		icon: '🧠',
	  },
	];
  </script>
  
  <section class="bg-teal-50 py-16">
	<div class="container mx-auto grid md:grid-cols-2 gap-8 px-6">
	  <!-- Text Section -->
	  <div class="space-y-4">
		<p class="text-teal-700 font-semibold">We provide</p>
		<h2 class="text-3xl md:text-4xl font-bold">
		  Here is a little more about <br />
		  Our Hospital Service
		</h2>
		<p class="text-gray-600">
		  We have several gift shops and hair salons on the hospital’s main campus.
		</p>
		<ul class="space-y-3">
		  {#each services as service (service.title)}
			<li class="flex items-center text-teal-700 font-medium">
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="w-5 h-5 mr-3"
			  >
				<path
				  stroke-linecap="round"
				  stroke-linejoin="round"
				  d="M5 13l4 4L19 7"
				/>
			  </svg>
			  {service.title}
			</li>
		  {/each}
		</ul>
		<button
		  class="mt-6 bg-teal-700 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-teal-800 transition"
		>
		  All Service
		</button>
	  </div>
  
	  <!-- Cards Section -->
	  <div class="grid sm:grid-cols-2 gap-6">
		{#each services as service (service.title)}
		  <div
			class="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition"
		  >
			<div class="text-4xl mb-4">{service.icon}</div>
			<h3 class="text-lg font-semibold mb-2">{service.title}</h3>
			<p class="text-gray-600">{service.description}</p>
		  </div>
		{/each}
	  </div>
	</div>
  </section>
  