import { db } from "$src/lib/server"
import type { Actions, PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
    // return initial data of about us page
    var settings = await db('settings').query().first() ?? {};
    
    return {
        value: {
            title: settings.page_about_title,
            description: settings.page_about_description,
            content: settings.page_about_content,
        }
    }
}

export const actions: Actions = {
    async default({request}) { 
        const formData = await request.formData()
        const json = JSON.parse(formData.get('value')?.toString() ?? '{}')

        const settings = await db('settings').query().first() ?? {}

        settings.page_about_title = json.title;
        settings.page_about_description = json.description;
        settings.page_about_content = json.content;
        // Save about us data
        
        await db('settings').update(settings)

        return {success: true}
    }   
}