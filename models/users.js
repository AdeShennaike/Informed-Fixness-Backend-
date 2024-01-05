import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId},
    username: { type: String, unique: true, required: true },
    favorites: { type: String, unique: false},
})

const User = mongoose.model('User', userSchema) 
export default User