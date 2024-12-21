<script lang="ts">
	import Icon from '$components/core/Icon.svelte';
	import Text from '$components/core/Text.svelte';
	import { page } from '$app/state';
</script>

<nav
	class="fixed inset-x-0 bottom-0 z-50 border-t border-base-300 bg-base-200 backdrop-blur-xl md:hidden lg:hidden"
>
	<div class="flex justify-around py-md">
		<a
			href="/projects"
			class="flex flex-col items-center hover:text-content data-[active=true]:text-primary dark:data-[active=true]:text-primary-base"
			data-active={page.url.pathname === '/projects'}
		>
			<Icon name="package" />
			<Text size="xs">Projects</Text>
		</a>

		<a
			href="/blogs"
			class="flex flex-col items-center hover:text-content data-[active=true]:text-primary dark:data-[active=true]:text-primary-base"
			data-active={page.url.pathname === '/blogs'}
		>
			<Icon name="blog" />
			<Text size="xs">Blogs</Text>
		</a>

		<a
			href="/"
			class="flex flex-col items-center hover:text-content data-[active=true]:text-primary dark:data-[active=true]:text-primary-base"
			data-active={page.url.pathname === '/'}
		>
			<Icon name="home" />
			<Text size="xs">Home</Text>
		</a>

		<a
			href="/contact"
			class="flex flex-col items-center hover:text-content data-[active=true]:text-primary dark:data-[active=true]:text-primary-base"
			data-active={page.url.pathname === '/contact'}
		>
			<Icon name="phone" />
			<Text size="xs">Contact</Text>
		</a>

		<a
			href="/about"
			class="flex flex-col items-center hover:text-content data-[active=true]:text-primary dark:data-[active=true]:text-primary-base"
			data-active={page.url.pathname === '/about'}
		>
			<Icon name="user" />
			<Text size="xs">About</Text>
		</a>
	</div>
</nav>
