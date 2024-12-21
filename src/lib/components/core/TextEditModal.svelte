<script>
	import { settingsStore } from '$lib/stores/settings';
	import { modalStore } from '$src/lib/stores/modal';
	import { Button, Modal, ModalContent } from 'owls-lib';
	import RichTextEditor from './RichTextEditor.svelte';

	let { key, richtext = false, ...props } = $props();

	let value = $state($settingsStore[key]);

	let oncancel = () => {
		modalStore.close();
	};

	let onsubmit = () => {
		props.onsubmit?.();
		$settingsStore[key] = value;
		modalStore.close();
	};
</script>

<ModalContent
	class="!max-w-screen-md text-start font-mono text-sm leading-normal tracking-normal text-content"
>
	<div class="font-sans text-lg font-bold">Edit Text</div>
	{#if richtext}
		<RichTextEditor bind:value />
	{:else}
		<textarea class="border border-base-300 bg-base-100" rows={10} bind:value name="" id=""
		></textarea>
	{/if}
	<div class="ms-auto font-sans">
		<Button variant="secondary" onclick={oncancel}>Cancel</Button>
		<Button onclick={() => onsubmit()}>Submit</Button>
	</div>
</ModalContent>
