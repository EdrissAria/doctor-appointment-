<script lang="ts">
	// Example navigation links
	const navLinks = [
	  { name: "Home", href: "/" },
	  { name: "Blog", href: "/blog" },
	  { name: "Doctors", href: "/doctors" },
	  { name: "Profile", href: "/profile" }
	];
  </script>
  
  <header class="bg-orange-300">
	<div class="container mx-auto flex items-center justify-between py-4 px-6">
	  <!-- Logo -->
	  <div class="flex items-center">
		<div class="bg-teal-500 w-12 h-12 flex items-center justify-center rounded-full">
		  <svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-8 w-8 text-white"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		  >
			<path
			  stroke-linecap="round"
			  stroke-linejoin="round"
			  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16 3.422M12 14L5.84 17.422M21 9v6a9 9 0 11-18 0V9"
			/>
		  </svg>
		</div>
	  </div>
  
	  <!-- Navigation Links -->
	  <nav class="flex space-x-6">
		{#each navLinks as link}
		  <a
			href={link.href}
			class="text-black hover:text-teal-600 font-medium"
		  >
			{link.name}
		  </a>
		{/each}
	  </nav>
  
	  <!-- Call-to-Action Button -->
	  <div>
		<a
		  href="/book-appointment"
		  class="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-full"
		>
		  Book Appointment
		</a>
	  </div>
	</div>
  </header>
  