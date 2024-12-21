import { db } from "$src/lib/server";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const settings = await db('settings').query().first() ?? {}

    return {settings}
}

export const actions: Actions = {
    async default({request}) {
        const formData = await request.formData();

        const settings = await db('settings').query().first() ?? {}
        for(let entry of formData.entries()) {
            const [key, value] = entry 
            settings[key] = value
        }

        if(settings.id) {
            await db('settings').update(settings)
        } else {
            await db('settings').insert(settings)
        }

        return {success: true}
    }
}