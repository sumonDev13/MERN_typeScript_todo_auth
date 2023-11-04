import jwt from "jsonwebtoken";

export const generateToken = (id: string) : string | null=> {
    try {
        const token = jwt.sign({id},process.env.SECRET_KEY  || 'default secret' );
        return token;
    } catch (error) {
        console.log('Error signing token',error);
        return null;
    }
}