const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  id: String
  name: String,
  location: {
    longitude: Number,
    latitude: Number
  },
})

module.exports = mongoose.model("Users", UserSchema)
