import ContactRepository from "../repositories/contact.repository"

class ContactService {
  private repository: ContactRepository

  constructor() {
    this.repository = new ContactRepository()
  }

  async addContact(reqData: any) {
    const newContact = await this.repository.add(reqData)
    return newContact
  }

  async fetchAllContacts() {
    const allContacts = await this.repository.getAll()
    return allContacts
  }

  async modifyContact(contactId: number, reqData: any) {
    const updatedContact = await this.repository.modify(contactId, reqData)
    return updatedContact
  }

  async removeContact(contactId: number) {
    const deletedContact = await this.repository.remove(contactId)
    return deletedContact
  }
}

export default ContactService
