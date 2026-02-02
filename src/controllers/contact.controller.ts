import { Request, Response } from "express"
import ContactService from "../services/contact.service"

class ContactController {
  private service: ContactService

  constructor() {
    this.service = new ContactService()
  }

  public getContacts = async (req: Request, res: Response) => {
    const allContacts = await this.service.getAllContacts()
    return res.status(200).json(allContacts)
  }

  public createContact = async (req: Request, res: Response) => {
    const newContact = await this.service.createContact(req.body)
    return res.status(200).json(newContact)
  }

  public updateContact = async (req: Request, res: Response) => {
    const updatedContact = await this.service.updateContact(Number(req.params.id), req.body)
    return res.status(200).json(updatedContact)
  }

  public deleteContact = async (req: Request, res: Response) => {
    const deletedContact = await this.service.deleteContact(Number(req.params.id))
    return res.status(200).json({ msg: "deleted sussefully" })
  }
}

export default ContactController
