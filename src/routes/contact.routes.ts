import { Router } from "express"
import { Routes } from "../interfaces/route.interface"
import ContactController from "../controllers/contact.controller"

class ContactRoutes implements Routes {
  path: string = "/contacts"
  router: Router = Router()
  public controller = new ContactController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.getContacts)
    this.router.post(`${this.path}`, this.controller.createContact)
    this.router.put(`${this.path}/:id`, this.controller.updateContact)
    this.router.delete(`${this.path}/:id`, this.controller.deleteContact)
  }
}

export default ContactRoutes
