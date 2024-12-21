<script>
    let {animation = 'fade-up', children} = $props()
</script>

<div data-aos={animation}>
    {@render children()}
</div>