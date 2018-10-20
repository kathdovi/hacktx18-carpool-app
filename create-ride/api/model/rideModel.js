"use strict"
import { User } from "./userModel.js"

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Ride = {
  id: String,
  name: String,
  passengers: [User],
  driver: User
}

const RideSchema = new Schema(Ride)

export { Ride }
module.exports = mongoose.model("Users", UserSchema)
