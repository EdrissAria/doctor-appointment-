import { db } from "$src/lib/server"
import type { Actions } from "./$types"

export const actions: Actions = {
    async default({request}) {
        const body = await request.formData()

        const name = body.get('name')?.toString()
        const email = body.get('email')?.toString()
        const message = body.get('message')?.toString()

        await db('contacts').insert({name, email, message})
        
    }
}