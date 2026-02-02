import { PrismaClient } from "@prisma/client"
import { ContactInterface } from "../interfaces/contact.interface"

const prisma = new PrismaClient()

class ContactRepository {
  async create(contactData: ContactInterface) {
    return await prisma.contact.create({ data: contactData })
  }

  async findAll() {
    return await prisma.contact.findMany({})
  }

  async update(id: number, updateData: Partial<ContactInterface>) {
    return await prisma.contact.update({
      where: { id },
      data: updateData
    })
  }

  async delete(id: number) {
    return await prisma.contact.delete({
      where: { id }
    })
  }
}

export default ContactRepository
