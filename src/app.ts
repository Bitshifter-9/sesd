import express from "express"
import cors from "cors"
import { Routes } from "./interfaces/route.interface"

class App {
  public app: express.Application
  public port: string | number

  constructor(appRoutes: Routes[]) {
    this.app = express()
    this.port = process.env.PORT || 3001
    this.setupMiddlewares()
    this.configureRoutes(appRoutes)
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log("backed is started")
    })
  }

  private configureRoutes(appRoutes: Routes[]) {
    appRoutes.forEach((route) => {
      this.app.use("/", route.router)
    })
  }

  private setupMiddlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }
}

export default App
