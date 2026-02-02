import ContactRepository from "../repositories/contact.repository"
import { ContactInterface } from "../interfaces/contact.interface"

class ContactService {
  private contactRepository: ContactRepository

  constructor() {
    this.contactRepository = new ContactRepository()
  }

  async createContact(contactData: ContactInterface) {
    return await this.contactRepository.create(contactData)
  }

  async getAllContacts() {
    return await this.contactRepository.findAll()
  }

  async updateContact(id: number, updateData: Partial<ContactInterface>) {
    return await this.contactRepository.update(id, updateData)
  }

  async deleteContact(id: number) {
    return await this.contactRepository.delete(id)
  }
}

export default ContactService
