<script>
	import Icon from "./Icon.svelte";

    let {icon, text = '', onclick = undefined, active = false} = $props()

</script>

<button {onclick} data-active={active} data-tooltip-target="tooltip-bold" type="button" class="p-1 h-[32px] text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 data-[active=true]:text-gray-900 data-[active=true]:bg-gray-100 data-[active=true]:dark:hover:text-white data-[active=true]:dark:hover:bg-gray-600">
    <Icon class="!text-2xl" name={icon} />
    <span class="sr-only">{text}</span>
</button>
{#if text}
    <div id="tooltip-bold" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        {text}
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
{/if}