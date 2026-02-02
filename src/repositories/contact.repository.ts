import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

class ContactRepository {
  async add(reqData: any) {
    const newContact = await db.contact.create({ data: reqData })
    return newContact
  }

  async getAll() {
    const allContacts = await db.contact.findMany({})
    return allContacts
  }

  async modify(contactId: number, reqData: any) {
    const updatedContact = await db.contact.update({
      where: { id: Number(contactId) },
      data: reqData
    })
    return updatedContact
  }

  async remove(contactId: number) {
    const deletedContact = await db.contact.delete({
      where: { id: Number(contactId) }
    })
    return deletedContact
  }
}

export default ContactRepository
