import { db } from "$src/lib/server";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params}) => {

    return {
        blog: await db('blogs').query().filter('slug', '=', params.slug).first()
    }

}