import jwt from "jsonwebtoken";
import type { LayoutServerLoad } from "./$types";

export const prerender = false;

export const load: LayoutServerLoad = ({cookies}) => {

    const token = cookies.get('TOKEN') ?? ''

    if(!token) {
        return {
            user: null
        }
    }
    
    const user = jwt.verify(token, process.env.JWT_SECRET ?? 'jwt_secret')


    return {
        user
    }
}