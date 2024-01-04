import mongoose from 'mongoose'
import 'dotenv/config';


// **********************************
// shortcut to mongoose.connection object
// **********************************
const db = mongoose.connection

// **********************************
// Connect to the database
// **********************************
mongoose.connect(process.env.MONGODB)

db
.on('open', () => console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`))
.on('close', () => console.log('Disconnected from mongo'))
.on('error', (error) => console.log(error))


