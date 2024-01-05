import express from 'express'
import Exercise from '../models/exercises.js'

const router = express.Router()

import { getExercises, getExerciseByMuscle ,getExerciseById, createExercise, updateExercise, removeExercise } from '../controllers/exercises.js'

// **********************************
// Get Exercises
// **********************************
router.get('/', async (req, res) => {
    try {
        const exercises = await getExercises()
        
        //  Send all exercises
        res.status(200).json({
            exercises
        })
    } catch(error) {
        res.status(404).json({
            error: error.message,
            message: `There was an error getting the Exercise`})
    }
})

// **********************************
// Get Exercise by muscle name
// **********************************
router.get('/:muscle', async (req, res) => {
    try {
        const muscleGroup = req.params.muscle
        const exercise = await getExerciseByMuscle(muscleGroup)
        
        //  Send exercise
        res.status(200).json({
            exercise
        })
    } catch(error) {
        res.status(404).json({
            error: error.message,
            message: `There was an error getting the Exercise`})
        }
    })

// **********************************
// Get Exercise by id
// **********************************
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const exercise = await getExerciseById(id)
        
        //  Send exercise
        res.status(200).json({
            exercise
        })
    } catch(error) {
        res.status(404).json({
            error: error.message,
            message: `There was an error getting the Exercise`})
        }
    })

// **********************************
// Create Exercise
// **********************************
router.post("/", async (req, res) => {
    try{
        const exercisePayload = req.body
        const exercise = await createExercise(exercisePayload)
        
        //  Create a new exercise
        res.status(200).json({
            exercise
        })
    } catch (error){
        res.status(400).json({
            error: error.message,
            message: `There was an error creating the Exercise`})
        }
    })

// **********************************
// Update Exercise
// **********************************
router.put("/:id", async (req, res) => {
    try{
        const id = req.params.id
        const exerciseUpdate = req.body
        const exercise = await updateExercise(id, exerciseUpdate)
        
        res.status(200).json(
            exercise
        )
    } catch(error){
        res.status(400).json({
            error: error.message,
            message: `There was an error updating the Exercise`})
        }
    })
    
// **********************************
// Destroy Exercise
// **********************************
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const exercise = removeExercise(id)
 
        res.status(200).json({
            exercise
        })
    } catch (error) {
        res.status(400).json({
        error: error.message,
        message: `There was an error deleting the Exercise`})
    }
})

export default router