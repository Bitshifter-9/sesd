import { Router } from "express"
import { Routes } from "../interfaces/route.interface"
import ContactController from "../controllers/contact.controller"

class ContactRoutes implements Routes {
  path: string = "/contacts"
  router: Router = Router()
  public controller = new ContactController()

  constructor() {
    this.setupRoutes()
  }

  private setupRoutes() {
    this.router.get(`${this.path}`, this.controller.fetchContacts)
    this.router.post(`${this.path}`, this.controller.addContact)
    this.router.put(`${this.path}/:id`, this.controller.modifyContact)
    this.router.delete(`${this.path}/:id`, this.controller.removeContact)
  }
}

export default ContactRoutes
