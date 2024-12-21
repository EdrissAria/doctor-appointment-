import { db } from "$src/lib/server";
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {


	return {
		services: await db('services').query().all(),
		projects: await db('projects').query().all(),
		technologies: await db('technologies').query().all(),
		testimonials: await db('testimonials').query().all(),
	}
}

export const actions: Actions = {
	async saveSettings({request}) {
		const body = await request.formData();

        
		const value = JSON.parse(body.get('value')?.toString() ?? '{}')
		const settings = await db('settings').query().first() 

        let res = {}

		if(!settings) {
			res = await db('settings').insert(value)
        }
		else {
			res = await db('settings').update({...settings, ...value})
        }

		return {success: true}
	}
}