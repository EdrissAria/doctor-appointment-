<script lang="ts">
	import { getContext } from 'svelte';
	import texts from '$src/lib/texts';

	let {
		key = undefined,
		tag = 'span',
		bold = false,
		size = 'base',
		muted = false,
		align = undefined,
		html = false,
		block = false,
		children = undefined,
		class: klass = ''
	} = $props();

	let lang: string = getContext('LANG') ?? 'en';

	let classes = $derived.by(() => {
		let result = '';

		if (align === 'center') result += 'text-center ';
		if (align === 'end') result += 'text-end ';
		if (align === 'start') result += 'text-start ';

		if (bold) result += 'font-bold ';
		if (muted) result += 'text-muted ';

		if (size === 'xs') {
			result += 'text-xs '; // Base size
			result += 'md:text-sm '; // Medium screens
			result += 'lg:text-base '; // Large screens
		}

		if (size === 'sm') {
			result += 'text-sm '; // Base size
			result += 'md:text-base '; // Medium screens
			result += 'lg:text-lg '; // Large screens
		}

		if (size === 'md') {
			result += 'text-base '; // Base size
			result += 'md:text-lg '; // Medium screens
			result += 'lg:text-xl '; // Large screens
		}

		if (size === 'lg') {
			result += 'text-lg '; // Base size
			result += 'md:text-xl '; // Medium screens
			// result += 'lg:text-2xl '; // Large screens
		}

		if (size === 'xl') {
			result += 'text-xl '; // Base size
			result += 'md:text-2xl '; // Medium screens
			// result += 'lg:text-3xl '; // Large screens
		}

		if (size === '2xl') {
			result += 'text-2xl '; // Base size
			result += 'md:text-3xl '; // Medium screens
			result += 'lg:text-4xl '; // Large screens
		}

		if (size === '3xl') {
			result += 'text-[27px] '; // Base size
			result += 'md:text-3xl '; // Medium screens
			result += 'lg:text-4xl '; // Large screens
			result += 'xl:text-5xl '; // Extra-large screens
		}

		if (size === '4xl') {
			result += 'text-4xl '; // Base size
			result += 'md:text-5xl '; // Medium screens
			result += 'lg:text-6xl '; // Large screens
			// result += 'xl:text-7xl '; // Extra-large screens
		}
		return result + ' ' + klass;
	});
</script>

{#if html}
	<svelte:element this={tag} class={classes}>
		{#if children}
			{@render children()}
		{:else}
			{@html texts[lang][key]}
		{/if}
	</svelte:element>
{:else}
	<svelte:element this={tag} class={classes}>
		{#if children}
			{@render children()}
		{:else}
			{texts[lang][key]}
		{/if}
	</svelte:element>
{/if}

<!-- 


// let objectKey = $derived('text_' + lang + "_" + key)

	// When user changes the text
	// function oninput(e) {
		// if (html) {
		// 	$settingsStore[objectKey] = e.target.innerHTML;
		// } else {
		// 	$settingsStore[objectKey] = e.target.textContent;
		// }

	// 	$inlineChangedStore = true;
	// 	changed = true;
	// }

	// prevent click actions if Text is inslide <a> or <button>
	// function onclick(e) {
	// 	e.stopPropagation();
	// 	e.preventDefault();
	// }

	// When we click cancel/save button this code will run
	// $effect(() => {
	// 	if (!$inlineChangedStore) changed = false;
	// });

	// function openModal() {
	// 	modalStore.open(TextEditModal, {
	// 		key: objectKey,
	// 		richtext: html,
	// 		onsubmit: () => {
	// 			$inlineChangedStore = true;
	// 			changed = true;
	// 		}
	// 	});
	// } -->
<!-- // let isAdmin = $derived(page.url.searchParams.get('edit') != null); -->

<!-- if isAdmin}
	svelte-ignore a11y_no_static_element_interactions
	svelte-ignore a11y_click_events_have_key_events
	<span class="group relative inline-block">
		{#if html}
			<RichTextEditor bind:value={$settingsStore[objectKey]} inline/>
		{:else}
			<span
				bind:textContent={$settingsStore[objectKey]}
				{oninput}
				{onclick}
				data-changed={changed}
				class="inline-block min-w-4 border-2 outline-none transition-all data-[changed=false]:border-dashed data-[changed=false]:border-transparent data-[changed=true]:border-primary data-[changed=false]:hover:border-base-400"
				contenteditable
			>
				{$settingsStore[objectKey] ?? texts[lang][key]}
			</span>
		{/if}

		<span
			onclick={openModal}
			class="absolute -right-4 -top-4 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-primary-base bg-primary-base/80 p-0 p-0.5 text-primary-content opacity-0 hover:bg-primary-base hover:bg-opacity-80 group-hover:opacity-100"
		>
			<Icon name="materialSymbolsEdit" class="text-sm" />
		</span>
	</span>
{:else  -->
