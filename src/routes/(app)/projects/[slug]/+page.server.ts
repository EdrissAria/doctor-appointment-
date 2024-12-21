import { db } from "$src/lib/server";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params}) => {
    return {
        project: await db('projects').query().filter('slug', '=', params.slug).first()
    }
}