import App from "./app"
import ContactRoutes from "./routes/contact.routes"
import "dotenv/config"

const app = new App([new ContactRoutes()])

app.startServer()
