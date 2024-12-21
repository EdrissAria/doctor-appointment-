import { db } from "$src/lib/server";
import type { Actions } from "./$types"

export const actions: Actions = {
    async default({request}) {
        const body = await request.formData()

        const email = body.get('email')?.toString()

		console.log('body: ', body)
        await db('subscribers').insert({email})
        
    }
}

export async function load() {
    // all items
    const blogs = await db('blogs').query().all();

    return {
        blogs
    }
    

    // Single Item
    // const data = await db('blogs').query().filter('id', '=', 'id_from_url").first()
    // data will be the object
    

    // Pagination
    // const data = await db('blogs').query().paginate(1, 10)

    // result will be
    // data.items = [...]
    // data.page = 1,
    // data.perPage = 10
    // data.total = 36

    
	// return {
        // blogs: data,
		// blogs: [
		// 	{
		// 		title: 'Nuxt 3.14',
		// 		date: 'November 4, 2024',
		// 		description:
		// 			'Nuxt 3.14 is out - with a new rspack builder, shared folder, and performance enhancements!',
		// 		version: 'v3.14',
		// 		image: '/movies.webp'
		// 	},
		// 	{
		// 		title: 'Nuxt 3.13',
		// 		date: 'August 22, 2024',
		// 		description:
		// 			"Nuxt 3.13 is out - porting back some of the new features we're building for Nuxt 4!",
		// 		version: 'v3.13',
		// 		image: '/movies.webp'
		// 	},
		// 	{
		// 		title: 'Introducing Nuxt Scripts',
		// 		date: 'August 20, 2024',
		// 		description:
		// 			'Nuxt Scripts provides better performance, privacy, security, and developer experience for Nuxt applications.',
		// 		version: 'Scripts',
		// 		image: '/movies.webp'
		// 	}
		// ]
	// };
}
