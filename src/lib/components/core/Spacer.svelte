<script>
    let { size = 'md', ...props } = $props()

    let classes = $derived.by(() => {
        if(size == 'sm') return 'h-sm'
        if(size == 'md') return 'h-md'
        if(size == 'lg') return 'h-lg'
        if(size == 'xl') return 'h-xl'
        if(size == '2xl') return 'h-2xl'
        if(size == '3xl') return 'h-3xl'
        if(size == '4xl') return 'h-4xl'
        if(size == '5xl') return 'h-5xl'
        if(size == '6xl') return 'h-6xl'
    })
</script>
<div class="{classes} {props.class}"></div>