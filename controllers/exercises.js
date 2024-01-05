import Exercise from '../models/exercises.js'

// **********************************
// Read 
// **********************************
const getExercises = () => {
    return Exercise.find({})
    .then((response) => {
        return response
    })
    .catch((error) => {
        throw error
    })
}

const getExerciseByMuscle = (muscle) => {
    return Exercise.find({muscle_group: muscle}) 
    .then((response) => {
      return response
    })
    .catch((error) => {
      throw error
    });
}

const getExerciseById = (id) => {
    return Exercise.find({_id: id}) 
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
    return Exercise.create(exercise)
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
    return Exercise.findOneAndUpdate({_id: id}, updateData, { new: true }) 
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
    return Exercise.deleteOne({_id: id })    
    .then((response) => {
        return response
    })
    .catch((error) => {
        throw error
    })
} 

export {
    getExercises,
    getExerciseByMuscle,
    getExerciseById,
    createExercise,
    updateExercise,
    removeExercise
}