<script lang="ts">
	import PageHeader from "$components/core/PageHeader.svelte";

    let {data} = $props()

</script>

<PageHeader title="Texts" />

<h1>Show texts in table. edit each item in modal (same as modal which we show in UI)</h1>
{#each Object.keys(data) as item}
    <div><b>{item}</b>: {@html data[item]}</div>
{/each}