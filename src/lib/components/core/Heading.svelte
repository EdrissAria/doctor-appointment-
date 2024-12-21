<script>
	import Text from "./Text.svelte";

    let {level = 1, tag = undefined, key = undefined, class:klass = '',children = undefined, ...restProps} = $props();

    let size = $derived.by(() => {
        if(level == 1) return '4xl'
        if(level == 2) return '3xl'
        if(level == 3) return '2xl'
        if(level == 4) return 'xl'
    })

    let tag2 = $derived.by(() => {
        return tag ? tag : 'h' + level
    })

</script>

<Text {...restProps} bold tag={tag2} {size} {key} html class="mb-md {klass}" {children} />