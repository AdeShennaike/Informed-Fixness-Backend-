import Exercise from '../models/exercises.js'

// **********************************
// Read 
// **********************************
const getExercises = () => {
    return Exercise.find()
    .then((response) => {
        return response
    })
    .catch((error) => {
        throw error
    })
}

const getExerciseById = (id) => {
    return Exercise.find({exercise_id: id}) 
    .then((response) => {
      return response
    })
    .catch((error) => {
      throw error
    });
}
// **********************************
// Create
// **********************************
const createExercise = (exercise) => {
    return Exercise.insertOne(exercise)
    .then((response) => {
        return response
    })
    .catch((error) => {
        throw error
    })
}
// **********************************
// Update
// **********************************
const updateExercise = (id, updateData) => {
    return Exercise.updateOne(id, updateData) 
    .then((response) => {
      return response
    })
    .catch((error) => {
      throw error
    });
}

// **********************************
// Delete
// **********************************
const removeExercise = (id) => {
    return Exercise.deleteOne({ exercise_id: id })    
    .then((response) => {
        return response
    })
    .catch((error) => {
        throw error
    })
} 

export {
    getExercises,
    getExerciseById,
    createExercise,
    updateExercise,
    removeExercise
}