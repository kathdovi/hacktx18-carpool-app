"use strict"
import { User } from "./userModel.js"

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Ride = {
  id: String,
  name: String,
  arrivalTime: Date,
  returnTime: Date,
  passengers: [User],
  availableSeats: Number,
  driver: User
}

const RideSchema = new Schema(Ride)

export { Ride }
module.exports = mongoose.model("Users", UserSchema)
