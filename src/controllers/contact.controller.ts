import { Request, Response } from "express"
import ContactService from "../services/contact.service"

class ContactController {
  private service: ContactService

  constructor() {
    this.service = new ContactService()
  }

  public fetchContacts = async (req: Request, res: Response) => {
    const allContacts = await this.service.fetchAllContacts()
    return res.status(200).json(allContacts)
  }

  public addContact = async (req: Request, res: Response) => {
    const newContact = await this.service.addContact(req.body)
    return res.status(200).json(newContact)
  }

  public modifyContact = async (req: Request, res: Response) => {
    const updatedContact = await this.service.modifyContact(Number(req.params.id), req.body)
    return res.status(200).json(updatedContact)
  }

  public removeContact = async (req: Request, res: Response) => {
    const deletedContact = await this.service.removeContact(Number(req.params.id))
    return res.status(200).json({ msg: "deleted sussefully" })
  }
}

export default ContactController
