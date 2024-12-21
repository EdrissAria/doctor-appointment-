<script>
  const { href, src, ...rest} = $props();
</script>

<a {...rest} class="gap-4 h-8 text-3xl {rest.class}" {href}>
  <img class="object-cover h-full w-full" {src} alt="our logo, tora che" />
  <span class="tracking-widest">Veltify</span>
</a>