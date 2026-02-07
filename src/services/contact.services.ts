import prisma from "../lib/prisma.js"
import { sendEmail } from "../lib/mailer.js"
import { statusContact, Prisma } from "@prisma/client"

export interface DataContactInterface {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export const ContactService = {
    create(data: DataContactInterface) {
        return prisma.contact_messages.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone ?? null,
                subject: data.subject,
                message: data.message,
                status: statusContact.Unread,
                created_at: new Date()
            } as any,
        })
    },

  getAll() {
    return prisma.contact_messages.findMany({
      orderBy: { created_at: "desc" },
    })
  },

  getById(id: number) {
    return prisma.contact_messages.findUnique({
      where: { id },
    })
  },

  delete(id: number) {
    return prisma.contact_messages.delete({
      where: { id },
    })
  },

  async reply(id: number, markdown: string) {
    const contact = await prisma.contact_messages.findUnique({
      where: { id },
    })

    if (!contact) {
      throw new Error("contact not found")
    }

    await sendEmail(
      contact.email,
      `Re: ${contact.subject}`,
      markdown
    )

    return prisma.contact_messages.update({
      where: { id },
      data: {
        status: statusContact.Replied,
      },
    })
  },

  updateStatus(id: number, status: statusContact) {
    return prisma.contact_messages.update({
      where: { id },
      data: { status },
    })
  },
}
