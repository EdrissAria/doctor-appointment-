<script lang="ts">
	import { themeStore } from '$src/lib/stores/theme';
	import MainHeader from '$components/layout/MainHeader.svelte';
	import BottomNav from '$components/layout/BottomNav.svelte';
	import Footer from '$components/layout/Footer.svelte';
	import { settingsStore } from '$src/lib/stores/settings.js';
	import { inlineChangedStore } from '$src/lib/stores/inline.js';
	import ModalProvider from '$components/core/ModalProvider.svelte';
	import '../../app.css';
	import { onMount, setContext } from 'svelte';
	import 'aos/dist/aos.css';

	const gtagId = 'G-XGVNPLXXYJ';

	onMount(async () => {
		const AOS = (await import('aos')).default;
		AOS.init({
			duration: 400,
			easing: 'ease-out',
			once: true
		});

		setTimeout(() => {
			const script = document.createElement('script');
			script.async = true;
			script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gtagId;

			document.head.appendChild(script);


			setTimeout(() => {
				window.dataLayer = window.dataLayer || [];

				function gtag() {
					window.dataLayer.push(arguments);
				}
				gtag('js', new Date());
				
				gtag('config', gtagId);
			}, 1000);
		}, 2000);
	});

	let { children, data } = $props();

	async function saveSettings() {
		const formData = new FormData();
		formData.set('value', JSON.stringify($settingsStore));
		data.settings = JSON.parse(JSON.stringify($settingsStore));

		await fetch('/?/saveSettings', {
			method: 'POST',
			body: formData
		});
		$inlineChangedStore = false;
	}

	async function cancelChanges() {
		settingsStore.set(JSON.parse(JSON.stringify(data.settings)));
		$inlineChangedStore = false;
	}

	onMount(() => {
		$themeStore = data.theme;
	});
	settingsStore.set(JSON.parse(JSON.stringify(data.settings)));

	setContext('LANG', data.lang);
</script>

<div
	class="bg-base-100 text-content"
	class:dark={$themeStore === 'dark'}
	data-theme={data.settings.theme}
	dir={data.lang === 'en' ? 'ltr' : 'rtl'}
>
	{#if $inlineChangedStore}
		<div class="fixed right-8 top-20 z-[100] flex gap-4">
			<div
				onclick={cancelChanges}
				class="cursor-pointer rounded border border-primary bg-base-200 px-4 py-2 text-content hover:bg-base-300"
			>
				Cancel
			</div>
			<div
				onclick={saveSettings}
				class="cursor-pointer rounded border border-primary bg-primary px-4 py-2 text-primary-content hover:bg-primary-hover"
			>
				Save
			</div>
		</div>
	{/if}

	<MainHeader />
	{@render children()}
	<BottomNav />
	<Footer />
</div>

<ModalProvider />
