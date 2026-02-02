import express from "express"
import cors from "cors"
import { Routes } from "./interfaces/route.interface"

class App {
  public app: express.Application
  public port: string | number

  constructor(routes: Routes[]) {
    this.app = express()
    this.port = process.env.PORT || 3001
    this.initializeMiddlewares()
    this.initializeRoutes(routes)
  }

  public startServer() {
    this.app.listen(this.port, () => {
      console.log(`backend is started on http://localhost:${this.port}`)
    })
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router)
    })
  }

  private initializeMiddlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }
}

export default App
