import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

class ContactRepository {
  async create(reqData: any) {
    const newContact = await db.contact.create({ data: reqData })
    return newContact
  }

  async findAll() {
    const allContacts = await db.contact.findMany({})
    return allContacts
  }

  async update(contactId: number, reqData: any) {
    const updatedContact = await db.contact.update({
      where: { id: Number(contactId) },
      data: reqData
    })
    return updatedContact
  }

  async delete(contactId: number) {
    const deletedContact = await db.contact.delete({
      where: { id: Number(contactId) }
    })
    return deletedContact
  }
}

export default ContactRepository
