<script lang="ts">
	import { cls } from './helpers.ts';

	let { element = $bindable(), baseProps, children } = $props();
	let { tag = 'div', name, css = {}, restProps = {}, ...rest } = $derived(baseProps);
	let { class: klass, ...rest2 } = $derived(restProps);

</script>

<svelte:element this={tag} bind:this={element} class={cls(name, css, klass)} {...rest} {...rest2}>
	{@render children()}
</svelte:element>
