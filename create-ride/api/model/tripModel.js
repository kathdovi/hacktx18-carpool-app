"use strict"

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Trip = {
  arrivalTime: Date,
  returnTime: Date,
  name: String,
  destination: String
}

const TripSchema = new Schema(Trip)

export { Trip }
module.exports = mongoose.model("Trips", TripSchema)
