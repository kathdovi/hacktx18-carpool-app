"use strict"
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RideSchema = new Schema({
  id: String,
  name: String,
  passengers: [User],
  driver: User
})

module.exports = mongoose.model("Users", UserSchema)
