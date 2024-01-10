import exerciseRawData from '../data/exerciseRaw.json' assert {type:'json'}
import Exercise from '../models/exercises.js'
import '../config/database.js'
import mongoose from 'mongoose'

// map function is a method that retuns a new arry oject from old arry data. we can use the map function to fenerate a new object for every object in the old array. you create a  new array, out of an old one, modifying the object as you go. in this case, our monarch object is the one we'll be applying the return logic to. that is a map function
const exerciseData = exerciseRawData.map(exercise => {
    return {
        name: exercise.name,
        muscle_group: exercise.muscle,
        equipment: exercise.equipment,
        instructions: exercise.instructions
    }   
})


//this is where you bring in the model creating a function to seed our database by removing everything and uploading a fresh set of data (using the map function from above).  Used to 'reset' a database without manual effort.  This is an anonomyous function, there's no need to name it.  All logic exists within the try block.  Mongoose will communicate with our database, whenever we use the capitol M Monarch term.
const exerciseDatabase = async ()=>{
    try {
        await Exercise.deleteMany()
        await Exercise.create(exerciseData)
        console.log('Exercise Data Seeded')
        mongoose.disconnect()
    } catch (error) {
        throw error
    }
}

exerciseDatabase()
