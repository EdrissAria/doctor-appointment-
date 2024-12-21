<script lang="ts">
	import { page } from '$app/state';
	import texts from '$src/lib/texts';
	// Destructuring and providing default values
	let {
		title = '',
		metaTitle = title,
		metaDescription = '',
		image = '',
		locale = 'en_US',
		robots = 'index, follow',
		twitterCard = 'summary_large_image',
		siteName = texts.site_name,
		ogType = 'website',
		ogImage = image || '',
		ogTitle = metaTitle,
		ogDescription = metaDescription
	} = $props();

	$inspect(page.url.href);
</script>

<svelte:head>
	<!-- Standard Meta Tags -->
	<title>{metaTitle}</title>
	<meta name="title" content={metaTitle} />
	<meta name="description" content={metaDescription} />

	<!-- Open Graph Meta Tags for better sharing on social media -->
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content={ogTitle} />
	<meta property="og:description" content={ogDescription} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:locale" content={locale} />
	<meta property="og:site_name" content={siteName} />

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content={twitterCard} />
	<meta name="twitter:title" content={ogTitle} />
	<meta name="twitter:description" content={ogDescription} />
	<meta name="twitter:image" content={ogImage} />

	<!-- Robots Meta Tag -->
	<meta name="robots" content={robots} />

	<!-- Favicon (optional) -->
	<link rel="icon" href="/favicon.ico" />
</svelte:head>
