<script lang="ts">
    import { customAlphabet } from 'nanoid';


	import { modalStore } from "$src/lib/stores/modal";
	import { Button, ModalContent } from "owls-lib";

    let {value, placeholder, title, onsubmit} = $props();
    let isLoading = $state(false)

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const getId = customAlphabet(alphabet, 8);
    
   
	async function upload(e) {
		isLoading = true;
		const id = getId()

		fetch('/files/' + id, {
			method: 'PUT',
			headers: {
                'Content-Type': e.target.files[0].type, // Use the file's MIME type
            },
            body: e.target.files[0],
		})
			.then((response) => response.text())
			.then((data) => {
				value = id;
			})
			.catch((error) => {
				console.error('Error:', error);
			})
			.finally(() => {
				isLoading = false;
			});
	}

    function handleSubmit() {
        onsubmit(value);
        modalStore.close()
    }

</script>
<ModalContent>
    <div class="text-lg font-sans font-bold">{title}</div>
    
    <input
    class=" block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
    class:opacity-50={isLoading}
    class:disabled={isLoading}
    type="file"
    placeholder={placeholder}
    onchange={upload}
/>
<span>{value}</span>
<div class="ms-auto font-sans">
    <Button variant="secondary" onclick={modalStore.close}>Cancel</Button>
    <Button onclick={handleSubmit}>Submit</Button>
</div>
</ModalContent>