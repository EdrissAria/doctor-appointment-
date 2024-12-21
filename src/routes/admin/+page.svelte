<script>
	import SidebarToggler from '$components/core/SidebarToggler.svelte';
	import { Alert } from 'owls-lib';

	let {data} = $props()
	
</script>

<div class="p-4">
	<div class="flex gap-2 items-center justify-start mb-4">
		<SidebarToggler />
		<h1 class="font-bold text-2xl">Admin Panel</h1>
	
	</div>
	<Alert icon="E" title="Portfolio">
		Welcome {data.user?.username}!
	</Alert>
</div>

