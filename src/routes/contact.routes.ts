import { Router } from "express"
import { Routes } from "../interfaces/route.interface"
import ContactController from "../controllers/contact.controller"

class ContactRoutes implements Routes {
  path: string = "/contacts"
  router: Router = Router()
  public contactController = new ContactController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.contactController.getContacts)
    this.router.post(`${this.path}`, this.contactController.createContact)
    this.router.put(`${this.path}/:id`, this.contactController.updateContact)
    this.router.delete(`${this.path}/:id`, this.contactController.deleteContact)
  }
}

export default ContactRoutes
