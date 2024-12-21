<script lang="ts">
	import CollectionForm from '$lib/components/admin/CollectionForm.svelte';
	import collections from '$collections';
	import { page } from '$app/state';

	let { data, form } = $props();
</script>

{#if collections[page.params.slug]}
	<CollectionForm collection={collections[page.params.slug]} {data} {form} />
{/if}
