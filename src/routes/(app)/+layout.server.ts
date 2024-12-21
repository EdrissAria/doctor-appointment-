import { db } from '$src/lib/server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const theme = cookies.get('theme') || 'light';
	const lang = cookies.get('lang') || 'en';
	// const lang = 'fa'

	const settings = await db('settings').query().first() ?? {};

	// const settings = {
	// 	heading: `
	// 	<span class="font-medium">Your</span>
	// 		<span class="text-primary-base">Career in Web Development</span>
	// 	<span class="font-medium">Starts Here</span>`,
	// 	description: 'this is description from settings'
	// }
	
	return { theme, lang, settings };
};
