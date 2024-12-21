<script>

	import PageHeader from "$components/core/PageHeader.svelte";
	import Text from "$components/core/Text.svelte";
import { Button } from "owls-lib";

let {data} = $props()

</script>
<PageHeader title="Settings" />

<div>THEME: </div>

<form method="POST">
	<div class="flex flex-col gap-2">
		<label>
			<input type="radio" name="theme" checked={data.settings.theme === 'bluish'} value="bluish">
			<span>Bluish</span>
		</label>
		<label>
			<input type="radio" name="theme" checked={data.settings.theme === 'brownish'} value="brownish">
			<span>Brownish</span>
		</label>
	</div>

	<button>Save</button>
</form>


<Text>Empty</Text>
<!-- 
<Button variant="secondary" href="/admin/settings/about">About Us</Button>
<Button variant="secondary" href="/admin/settings/texts">Texts</Button> -->