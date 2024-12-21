<script lang="ts">
	const currentYear: number = new Date().getFullYear();
  </script>
  
  <footer class="bg-gray-300 text-white py-10">
	<div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
	  <!-- Logo and Intro -->
	  <div>
		<h1 class="text-2xl font-bold">HealthCare</h1>
		<p class="mt-4 text-gray-300">
		  Your trusted partner for scheduling doctor appointments quickly and efficiently.
		</p>
	  </div>
  
	  <!-- Quick Links -->
	  <div>
		<h2 class="text-xl font-semibold">Quick Links</h2>
		<ul class="mt-4 space-y-2">
		  <li>
			<a href="/about" class="hover:text-blue-400">About Us</a>
		  </li>
		  <li>
			<a href="/services" class="hover:text-blue-400">Our Services</a>
		  </li>
		  <li>
			<a href="/contact" class="hover:text-blue-400">Contact</a>
		  </li>
		  <li>
			<a href="/faq" class="hover:text-blue-400">FAQs</a>
		  </li>
		</ul>
	  </div>
  
	  <!-- Contact Info -->
	  <div>
		<h2 class="text-xl font-semibold">Contact Us</h2>
		<ul class="mt-4 space-y-2 text-gray-300">
		  <li>
			<span>📍 123 Health St., Wellness City</span>
		  </li>
		  <li>
			<a href="tel:+1234567890" class="hover:text-blue-400">📞 +1 234 567 890</a>
		  </li>
		  <li>
			<a href="mailto:info@healthcare.com" class="hover:text-blue-400">✉️ info@healthcare.com</a>
		  </li>
		</ul>
	  </div>
	</div>
  
	<div class="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
	  <p>&copy; {currentYear} HealthCare. All Rights Reserved.</p>
	</div>
  </footer>
  