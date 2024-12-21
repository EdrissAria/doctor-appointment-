<script lang="ts">
	export let title: string;
	export let description: string;
	let isOpen = false;

	function toggleAccordion() {
		isOpen = !isOpen;
	}
</script>

<div class="border-b border-base-300 py-1 transition-all duration-300 ease-in-out">
	<div class="px-4">
		<button
			type="button"
			class="flex w-full items-center justify-between text-start font-medium text-muted outline-none hover:text-content"
			onclick={toggleAccordion}
		>
			<span class="text-lg">{title}</span>
			<svg
				class="h-3 w-3 transform transition-transform duration-300"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 10 6"
				class:rotate-180={isOpen}
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 5 5 1 1 5"
				/>
			</svg>
		</button>

		<div
			class="mt-2 h-0 overflow-hidden text-muted opacity-0"
			class:h-auto={isOpen}
			class:opacity-100={isOpen}
		>
			<p class="text-base leading-relaxed text-muted">{description}</p>
		</div>
	</div>
</div>
