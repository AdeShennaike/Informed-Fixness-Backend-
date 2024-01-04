// **********************************
// Enabling Environmental Variables
// **********************************
import "./node_modules/dotenv/config.js"

// **********************************
// Import Dependencies
// **********************************
import express, { json } from "express"
import cors from "cors"
import morgan from "morgan"
import "./config/database.js"

// **********************************
// Import Router
// **********************************
import exerciseRouter from './routes/exercises.js'

// **********************************
//Creating Application Objects
// **********************************
const app = express()
const PORT = process.env.PORT || 3000

// **********************************
// Middleware (express.json(), cors)
// **********************************
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// **********************************
// Routes
// **********************************
app.use('/exercise', exerciseRouter)

// **********************************
// Set up the server to listen on a port
// **********************************
app.listen(PORT, function() {
    console.log(`App running on ${PORT} port`)
})