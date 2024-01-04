// **********************************
// Enabling Environmental Variables
// **********************************
import "./node_modules/dotenv/config.js"

// **********************************
// Import Dependencies
// **********************************
import express, { json } from "express"
import cors from "cors"
import "./config/database.js"

// **********************************
// Import Data
// **********************************
import exerciseRawData from './data/exercise.json' assert {type:'json'}

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

// **********************************
// Test Routes
// **********************************
app.get('/', function(req, res) {
    res.json({
        message: `Welcome to Express`,
        exercise: exerciseRawData
    })
})

app.post('/greet', function(req, res) {
    const name = req.body.name

    res.json({
        greeting: `Welcome to Express ${name}`
    })
})


// **********************************
// Set up the server to listen on a port
// **********************************
app.listen(PORT, function() {
    console.log(`App running on ${PORT} port`)
})