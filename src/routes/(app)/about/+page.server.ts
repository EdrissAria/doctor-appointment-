import { db } from "$src/lib/server"

export const load = async () => {
    const settings = await db('settings').query().first() ?? {}
    const team = await db('team').query().all()

    return {
        title: settings.page_about_title,
        description: settings.page_about_description,
        content: settings.page_about_content,
        team
    }
}