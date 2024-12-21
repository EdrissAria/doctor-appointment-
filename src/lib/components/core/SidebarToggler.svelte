<script>
	import { Button } from "owls-lib";
    import Icon from '$components/core/Icon.svelte'
    import { sidebarStore } from '$src/lib/stores/sidebar';
</script>

<span class="md:hidden">
    <Button variant="ghost"  onclick={() => ($sidebarStore = !$sidebarStore)}>
        {#if $sidebarStore}
            <Icon class="w-lg h-lg" name="lucidePanelLeftClose"/>
        {:else}
            <Icon class="w-lg h-lg" name="lucidePanelLeftOpen"/>
        {/if}
    </Button>
</span>
