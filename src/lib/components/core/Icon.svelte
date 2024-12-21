<script lang="ts">
	import BaseIcon from './BaseIcon.svelte';
	import icons from '$constants/icons';

	interface IconProps {
		name: keyof typeof icons;
		class?: string;
		size?: string;
	}
	let { name, size = '3xl', ...props }: IconProps = $props();


	let classes = $derived.by(() => {
		let result = '';

		if (size === 'xs') {
			result += 'text-xs '; // Base size
			result += 'md:text-sm '; // Medium screens
			result += 'lg:text-base '; // Large screens
		}

		if (size === 'sm') {
			result += 'text-sm '; // Base size
			result += 'md:text-base '; // Medium screens
			result += 'lg:text-lg '; // Large screens
		}

		if (size === 'md') {
			result += 'text-base '; // Base size
			result += 'md:text-lg '; // Medium screens
			result += 'lg:text-xl '; // Large screens
		}

		if (size === 'lg') {
			result += 'text-lg '; // Base size
			result += 'md:text-xl '; // Medium screens
			// result += 'lg:text-2xl '; // Large screens
		}

		if (size === 'xl') {
			result += 'text-xl '; // Base size
			result += 'md:text-2xl '; // Medium screens
			// result += 'lg:text-3xl '; // Large screens
		}

		if (size === '2xl') {
			result += 'text-2xl '; // Base size
			result += 'md:text-3xl '; // Medium screens
			result += 'lg:text-4xl '; // Large screens
		}

		if (size === '3xl') {
			result += 'text-3xl '; // Base size
			result += 'md:text-4xl '; // Medium screens
			result += 'lg:text-5xl '; // Large screens
			result += 'xl:text-6xl '; // Extra-large screens
		}
		if (size === '4xl') {
			result += 'text-4xl '; // Base size
			result += 'md:text-5xl '; // Medium screens
			result += 'lg:text-6xl '; // Large screens
			result += 'xl:text-7xl '; // Extra-large screens
		}
		return result + ' ' + props.class;
	});

</script>

<BaseIcon {...props} {icons} {name} class={classes} />
