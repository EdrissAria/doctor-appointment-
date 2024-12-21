<script>
	import { modalStore } from "$src/lib/stores/modal";
	import { Modal } from "owls-lib";



</script>

<Modal bind:open={$modalStore.open}>
    {#if $modalStore.component}
        {@const Component = $modalStore.component}
        <Component {...$modalStore.props}/>
    {/if}
</Modal>