<script>
	import Container from "./Container.svelte";

    let {container = false, children, ...props} = $props()
</script>

<section {...props} class="{props.class} py-12 lg:py-16 md:py-24">
    {#if container}
        <Container class="h-full">
            {@render children()}
        </Container>
    {:else}
        {@render children()}
    {/if}
</section>