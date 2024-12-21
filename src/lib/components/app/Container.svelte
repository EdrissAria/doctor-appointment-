<script lang="ts">
    let {children, class: klass = '', ...props} = $props()
</script>
<div {...props} class="container {klass}">
    {@render children()}
</div>