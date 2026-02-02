import ContactRepository from "../repositories/contact.repository"

class ContactService {
  private repository: ContactRepository

  constructor() {
    this.repository = new ContactRepository()
  }

  async createContact(reqData: any) {
    const newContact = await this.repository.create(reqData)
    return newContact
  }

  async getAllContacts() {
    const allContacts = await this.repository.findAll()
    return allContacts
  }

  async updateContact(contactId: number, reqData: any) {
    const updatedContact = await this.repository.update(contactId, reqData)
    return updatedContact
  }

  async deleteContact(contactId: number) {
    const deletedContact = await this.repository.delete(contactId)
    return deletedContact
  }
}

export default ContactService
