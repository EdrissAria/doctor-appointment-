<script>
	import { modalStore } from "$src/lib/stores/modal";
	import { Button, ModalContent } from "owls-lib";

    let {value, placeholder, title, onsubmit} = $props();

    function handleSubmit() {
        onsubmit(value);
        modalStore.close()
    }

</script>
<ModalContent>
    <div class="text-lg font-sans font-bold">{title}</div>
    
    <input
    class=" block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
    placeholder={placeholder}
    bind:value
/>
<div class="ms-auto font-sans">
    <Button variant="secondary" onclick={modalStore.close}>Cancel</Button>
    <Button onclick={handleSubmit}>Submit</Button>
</div>
</ModalContent>