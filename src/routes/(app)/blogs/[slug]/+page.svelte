<script>
	import PageHeader from "$components/app/PageHeader.svelte";
	import PageSection from "$components/app/PageSection.svelte";
	import Seo from "$components/app/Seo.svelte";
	import { Image } from "@unpic/svelte";

    let {data} = $props()

</script>

<Seo title="{data.blog.title} - By Veltify" metaDescription="{data.blog.description} - And find out more about Veltify software web development solutions." image="/files/{data.blog.image}" />

<PageSection container>
	<PageHeader>
	  {#snippet title()}
	  {data.blog.title}
	  {/snippet}
	  {#snippet description()}
		{data.blog.description}
	  {/snippet}
	</PageHeader>
  
	<div class="my-8">
	  <Image 
		src="/files/{data.blog.image}" 
		alt={data.blog.title}
		aspectRatio="16 / 9"		
		class="w-full max-w-4xl mx-auto rounded-lg shadow-lg object-cover"
	  />
	</div>
  
	<div class="html">
	  {@html data.blog.content}
	</div>
  </PageSection>
  