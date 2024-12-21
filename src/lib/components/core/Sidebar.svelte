<script>
	import Drawer from './Drawer.svelte';
	let { children } = $props();

	import { sidebarStore } from '$src/lib/stores/sidebar';
	import { afterNavigate } from '$app/navigation';

	afterNavigate(() => {
		$sidebarStore = false;
	});
</script>

<div class="hidden md:flex">
	<aside class="flex-0 w-60 border-e p-2">
		<div class=" flex h-full flex-col gap-2">
			{@render children()}
		</div>
	</aside>
</div>

<div class="flex md:hidden">
	<Drawer bind:open={$sidebarStore}>
		<div class=" flex h-full flex-col gap-2">
			{@render children()}
		</div>
	</Drawer>
</div>
