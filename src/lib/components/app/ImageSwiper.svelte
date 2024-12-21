<script lang="ts">
	import Icon from '$components/core/Icon.svelte';

	let { images = [] } = $props();

	let currentIndex: number = $state(0);

	const nextSlide = () => {
		currentIndex = (currentIndex + 1) % images.length;
	};

	const prevSlide = () => {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	};

	let timer: number;
	$effect(() => {
		if (timer) clearInterval(timer);
		timer = setInterval(() => {
			nextSlide();
		}, 3000) as unknown as number;
	});

	let touchStartX: number = 0;
	let touchEndX: number = 0;

	const handleTouchStart = (e: TouchEvent) => {
		touchStartX = e.touches[0].clientX; 
	};

	const handleTouchEnd = (e: TouchEvent) => {
		touchEndX = e.changedTouches[0].clientX; 
		detectSwipe();
	};

	const detectSwipe = () => {
		const deltaX = touchEndX - touchStartX;
		if (deltaX > 50) {
			prevSlide();
		} else if (deltaX < -50) {
			nextSlide();
		}
	};
</script>

<div 
	class="relative mx-auto w-full max-w-4xl overflow-hidden"
	ontouchstart={handleTouchStart}
	ontouchend={handleTouchEnd}
>
	<div
		class="flex transition-transform duration-700 ease-in-out"
		style="transform: translateX(calc(-100% * {currentIndex}));"
	>
		{#each images as src, index}
			<img
				src={`/files/${src}`}
				alt={`Slide ${index + 1}`}
				class="h-72 w-full flex-shrink-0 object-cover"
			/>
		{/each}
	</div>

	<button
		class="absolute -left-0 top-1/2 -translate-y-1/2 transform rounded-full px-2 py-2 text-primary"
		onclick={prevSlide}
	>
		<Icon name="arrowleft" size="3xl" />
	</button>

	<button
		class="absolute -right-0 top-1/2 -translate-y-1/2 transform rounded-full px-2 py-2 text-primary"
		onclick={nextSlide}
	>
		<Icon name="arrowright" size="3xl" />
	</button>

	<div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
		{#each images as _, index}
			<button
				type="button"
				class="h-3 w-3 cursor-pointer rounded-full"
				class:bg-blue-500={currentIndex === index}
				class:bg-gray-300={currentIndex !== index}
				aria-label={`Go to slide ${index + 1}`}
				onclick={() => (currentIndex = index)}
			></button>
		{/each}
	</div>
</div>
