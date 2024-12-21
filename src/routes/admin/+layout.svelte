<script>
	import '$src/app.admin.css';
	import HomeLogo from '$components/core/HomeLogo.svelte';
	import Sidebar from '$components/core/Sidebar.svelte';
	import Navigation from '$components/admin/Navigation.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let { children, data } = $props();

	onMount(() => {
		if(!data.user)
			goto('/login')
	})
</script>

{#if data.user}
	<div class="flex h-dvh">
		<Sidebar>
			<div class="p-4">
				<HomeLogo class="inline-flex items-center me-4 w-8" href="/admin" src="/logo-light.svg" />
			</div>
			<Navigation />
		</Sidebar>

		<div class="flex-1 overflow-y-auto px-4">
			{@render children()}
		</div>
	</div>
{:else}
	<div class="flex items-center justify-center h-dvh">
		<div>Loading...</div>

	</div>
{/if}