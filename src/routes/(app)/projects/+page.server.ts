import { db } from "$src/lib/server";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        projects: await db('projects').query().all()
    }
}