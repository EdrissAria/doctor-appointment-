<script>
	import CollectionTable from '$components/admin/CollectionTable.svelte';
	import { page } from '$app/state';
	import collections from '$collections';

	let { data } = $props();
</script>

{#if collections[page.params.slug]}
	<CollectionTable collection={collections[page.params.slug]} {data} />
{/if}
