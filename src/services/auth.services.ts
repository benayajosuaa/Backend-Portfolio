import prisma from "../lib/prisma.js";
import brcypt from "bcrypt"
import jwt from "jsonwebtoken"
import { register } from "node:module";

export const AuthServices = {
    async login (email : string, password: string){
        const user = await prisma.users.findUnique({
            where: {email}
        })

        if (!user){
            throw new Error("invalid credentials")
        }

        const isValid = await brcypt.compare(
            password,
            user.password_hash
        )

        if(!isValid){
            throw new Error("invalid credentials")
        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_SECRET!,
            {expiresIn: "1d"}
        )

        return{
            token, 
            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        }
    },

    async register(email: string, password: string){
        const hashedPassword = await brcypt.hash(password, 10)
        return prisma.users.create({
            data: {
                email, 
                password_hash: hashedPassword,
                role: "user",
                created_at: new Date(),
                updated_at: new Date(),
            }
        })
    }
}