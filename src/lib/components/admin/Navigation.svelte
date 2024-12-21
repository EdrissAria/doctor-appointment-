<script lang="ts">
	import NavItem from '$components/core/NavItem.svelte';
	import NavMenu from '$components/core/NavMenu.svelte';

	import collections from '$collections';
	import { page } from '$app/state';
</script>

<NavMenu>
	{#each Object.keys(collections) as collectionName}
		<NavItem
			active={page.url.pathname.startsWith('/admin/' + collectionName)}
			name={collections[collectionName].plural}
			href="/admin/{collectionName}"
		/>
	{/each}
	<NavItem
		active={page.url.pathname.startsWith('/settings')}
		name="Settings"
		href="/admin/settings"
	/>
</NavMenu>
