import ContactRepository from "../repositories/contact.repository"

class ContactService {
  private contactRepository: ContactRepository

  constructor() {
    this.contactRepository = new ContactRepository()
  }

  async createContact(data: any) {
    const contact = await this.contactRepository.create(data)
    return contact
  }

  async getAllContacts() {
    const data = await this.contactRepository.findAll()
    return data
  }

  async updateContact(id: number, data: any) {
    const con = await this.contactRepository.update(id, data)
    return con
  }

  async deleteContact(id: number) {
    const con = await this.contactRepository.delete(id)
    return con
  }
}

export default ContactService
