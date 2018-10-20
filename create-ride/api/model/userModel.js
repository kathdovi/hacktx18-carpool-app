"use strict"
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = {
  id: String
  name: String,
  phoneNumber: String,
  driver: Boolean,
  location: {
    longitude: Number,
    latitude: Number
  }
}

const UserSchema = new Schema(User)

export { User }
module.exports = mongoose.model("Users", UserSchema)
