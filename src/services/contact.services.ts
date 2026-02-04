import prisma from "../lib/prisma.js";
import { sendEmail } from "../lib/mailer.js";
import { statusContact } from "../generated/prisma/index.js";

export interface DataContactInterface {
    name: string
    email: string
    phone?: string
    subject: string
    message: string
    created_at: Date
}

export const ContactService ={
    // public
    create(data: DataContactInterface){
        return prisma.contact_messages.create({
            data:{
                ...data,
                status: statusContact.Unread
            }
        })
    },

    // admin
    getAll(){
        return prisma.contact_messages.findMany({
            orderBy:{created_at: "desc"}
        })
    },

    getById(id:number){
        return prisma.contact_messages.findUnique({
            where: {id}
        })
    },

    delete(id: number){
        return prisma.contact_messages.delete({
            where: {id}
        })
    },

    async reply(id: number, markdown: string){
        const contact = await prisma.contact_messages.findUnique({
            where: {id}
        })
         if (!contact) {
            throw new Error("contact not found");
        }
        await sendEmail(
            contact.email,
            `Re: ${contact.subject}`,
            markdown
        )
        return prisma.contact_messages.update({
            where: {id},
            data: {
                status: statusContact.Replied
            }
        })
    },

    updateStatus(id: number, status: statusContact){
        return prisma.contact_messages.update({
            where: {id},
            data: {status}
        })
    }
}