import { Request, Response } from "express"
import ContactService from "../services/contact.service"

class ContactController {
  private contactService: ContactService

  constructor() {
    this.contactService = new ContactService()
  }

  public getContacts = async (req: Request, res: Response) => {
    try {
      const data = await this.contactService.getAllContacts()
      return res.status(200).json(data)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: "Failed to fetch contacts" })
    }
  }

  public createContact = async (req: Request, res: Response) => {
    try {
      const contact = await this.contactService.createContact(req.body)
      return res.status(200).json(contact)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: "Failed to create contact" })
    }
  }

  public updateContact = async (req: Request, res: Response) => {
    try {
      const con = await this.contactService.updateContact(Number(req.params.id), req.body)
      return res.status(200).json(con)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: "Failed to update contact" })
    }
  }

  public deleteContact = async (req: Request, res: Response) => {
    try {
      await this.contactService.deleteContact(Number(req.params.id))
      return res.status(200).json({ msg: "deleted successfully" })
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: "Failed to delete contact" })
    }
  }
}

export default ContactController
