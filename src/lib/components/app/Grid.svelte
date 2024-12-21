<script lang="ts">
	import type { Snippet } from "svelte";


	interface GridProps {
		cols?: '1' | '2' | '3' | '4' | '5' | '6',
		sm?: '1' | '2' | '3' | '4' | '5' | '6',
		md?: '1' | '2' | '3' | '4' | '5' | '6',
		lg?: '1' | '2' | '3' | '4' | '5' | '6',
		xl?: '1' | '2' | '3' | '4' | '5' | '6',
		items?: 'start' | 'center' | 'end' | 'stretch',
		class?: string;
		gap?: 'sm' | 'md' | 'lg' | 'xl',
		children: Snippet
	}
	
	let { cols = '1', items = undefined, sm = undefined, md = undefined, xl=undefined, lg = undefined, gap = 'sm', children, ...props } : GridProps= $props();
	

	let classes = $derived.by(() => {
		// DO NOT REMOVE THESE COMMENTS
		// grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1
		// grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2
		// grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3
		// grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4
		// grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5
		// grid-cols-6 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6

		let res = 'grid ';
		
		if(props.class) res += props.class

		if (cols) res += ' grid-cols-' + cols;
		if (sm) res += ' sm:grid-cols-' + sm;
		if (md) res += ' md:grid-cols-' + md;
		if (lg) res += ' lg:grid-cols-' + lg;
		if (xl) res += ' xl:grid-cols-' + xl;

		if(items) {
			switch(items)
			{
				case 'center': res += ' items-center'; break;
				case 'stretch': res += ' items-stretch'; break;
				case 'end': res += ' items-end'; break;
				case 'start': res += ' items-start'; break;
			}
		}

		if(gap)
		{
			switch(gap) {
				case 'sm': res += ' gap-sm sm:gap-md md:gap-lg' ; break;
				case 'md': res += ' gap-md sm:gap-lg lg:gap-xl' ; break;
				case 'lg': res += ' gap-lg sm:gap-xl lg:gap-2xl' ; break;
				case 'xl': res += ' gap-xl sm:gap-2xl md:gap-3xl xl:gap-4xl' ; break;
			}
		}

		return res;
	});
</script>

<div
	{...props}
	class={classes}
>
	{@render children()}
</div>
