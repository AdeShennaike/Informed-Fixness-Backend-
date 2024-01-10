import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
    exercise_id: { type: mongoose.Schema.Types.ObjectId},
    name: { type: String, unique: true, required: true },
    muscle_group: { type: String, unique: false, required: true },
    equipment: { type: String, unique: false, required: false },
    instructions: { type: String, unique: false, required: false }
})

const Exercise = mongoose.model('Exercise', exerciseSchema) 
export default Exercise