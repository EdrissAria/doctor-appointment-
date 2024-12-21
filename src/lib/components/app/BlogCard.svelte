<script lang="ts">
	import type { Blog } from '$types';
	import { Image } from '@unpic/svelte';
	type propTypes = {
		blog: Blog;
	};

	const { blog }: propTypes = $props();
</script>

<a href="/blogs/{blog.slug}"
	class="flex h-full flex-col cursor-pointer overflow-hidden rounded-lg border-2 border-base-300 bg-base-200 shadow-md hover:border-primary hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
>
	<Image class="h-64 w-full object-cover" src="/files/{blog.image}" aspectRatio="16 / 9" alt={blog.title} />

	<div class="p-xl">
		<span class="text-sm font-semibold text-primary-base">Released</span>
		<h2 class="my-md text-xl font-bold">{blog.title}</h2>
		<p class="mb-md text-muted line-clamp-3">{blog.description}</p>
		<p class="text-sm text-base-400">{blog.date}</p>
	</div>
</a>