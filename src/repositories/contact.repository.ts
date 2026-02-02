import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class ContactRepository {
  async create(data: any) {
    const contact = await prisma.contact.create({ data })
    return contact
  }

  async findAll() {
    const data = await prisma.contact.findMany({})
    return data
  }

  async update(id: number, data: any) {
    const con = await prisma.contact.update({
      where: { id: Number(id) },
      data
    })
    return con
  }

  async delete(id: number) {
    const con = await prisma.contact.delete({
      where: { id: Number(id) }
    })
    return con
  }
}

export default ContactRepository
