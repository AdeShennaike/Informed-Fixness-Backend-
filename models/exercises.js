import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
    name: { type: String, unique: true, required: true },
    muscle: { type: String, unique: false, required: true },
    equipment: { type: String, unique: false, required: false }
})

const Exercise = mongoose.model('Exercise', exerciseSchema) 
export default Exercise