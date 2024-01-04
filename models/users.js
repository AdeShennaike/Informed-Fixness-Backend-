import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId},
    username: { type: String, unique: true, required: true },
    favorites: { type: String, unique: false, required: true },
})

const Exercise = mongoose.model('User', exerciseSchema) 
export default User