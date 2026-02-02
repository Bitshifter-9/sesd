import App from "./app"
import ContactRoutes from "./routes/contact.routes"
import "dotenv/config"

const server = new App([new ContactRoutes()])

server.startServer()
