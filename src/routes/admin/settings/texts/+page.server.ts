import { db } from "$src/lib/server";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {

    const settings = await db('settings').query().first() ?? {}

    let texts: any = {}
    for(let key in settings)
    {
        if(key.startsWith('text_')) {
            texts[key.slice(5)] = settings[key]
        }
    }

    return texts
}

export const actions: Actions = {
    async default({request}) {
        const formData = await request.formData();
        const json = JSON.parse(formData.get('value')?.toString() ?? '{}')

        // 

        return {success: true}
    }
}