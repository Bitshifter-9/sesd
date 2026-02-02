import { Request, Response } from "express"
import ContactService from "../services/contact.service"

class ContactController {
  private contactService: ContactService

  constructor() {
    this.contactService = new ContactService()
  }

  public getContacts = async (req: Request, res: Response) => {
    const data = await this.contactService.getAllContacts()
    return res.status(200).json(data)
  }

  public createContact = async (req: Request, res: Response) => {
    const contact = await this.contactService.createContact(req.body)
    return res.status(200).json(contact)
  }

  public updateContact = async (req: Request, res: Response) => {
    const con = await this.contactService.updateContact(Number(req.params.id), req.body)
    return res.status(200).json(con)
  }

  public deleteContact = async (req: Request, res: Response) => {
    const con = await this.contactService.deleteContact(Number(req.params.id))
    return res.status(200).json({ msg: "deleted sussefully" })
  }
}

export default ContactController
