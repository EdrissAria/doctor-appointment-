<script>
	const { active = false, href, name } = $props();
</script>

<li class="">
	<a {href} data-active={active} class="p-2 inline-block hover:underline hover:bg-gray-100 data-[active=true]:bg-gray-200 rounded w-full">
		{name}
	</a>
</li>
