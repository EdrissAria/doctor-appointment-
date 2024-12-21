<script>
	import { Image } from "@unpic/svelte";

	let { value, field } = $props();
</script>

{#if field.multiple}
{#each (value ?? []).slice(4) as item}
	<Image width={50} height={50} src="/files/{item}" alt="image234234" />
{/each}
{#if value.length > 4}
	<div class="w-3xl h-3xl flex items-center justify-center">+{value.length - 4}</div>
{/if}
{:else}
	<Image width={50} height={50} src="/files/{value}" alt="image234234" />
{/if}
