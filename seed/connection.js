import mongoose from "mongoose"

mongoose.Promise = Promise;

const mongoURI = process.env.MONGODB

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(err => console.log("Connection Failed.", err));

module.exports = mongoose;