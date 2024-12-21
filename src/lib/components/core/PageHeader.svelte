<script lang="ts">
	import { Button } from "owls-lib";
	import SidebarToggler from "./SidebarToggler.svelte";

    let {showSidebarToggler = true, title, backUrl = undefined, backText = 'Back', children = undefined, ...restProps} = $props();
</script>
<div {...restProps} class="flex items-center justify-between gap-2 py-4">
    {#if showSidebarToggler}
        <SidebarToggler />
    {/if}
    <h2 class="flex-1 text-2xl font-bold text-gray-800">{title}</h2>
    <div class="flex flex-wrap gap-2">
        {#if backUrl}
            <Button variant="outline" href={backUrl}>
                {'<'}
                {backText}
            </Button>
        {/if}
        {@render children?.()}
    </div>
</div>