"use strict"

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  phoneNumber: String,
  driver: Boolean,
  location: {
    longitude: Number,
    latitude: Number
  }
})

const RideSchema = new Schema({
  passengers: [UserSchema],
  availableSeats: Number,
  driver: UserSchema
})

const TripSchema = new Schema({
  arrivalTime: Date,
  returnTime: Date,
  name: String,
  destination: String
})

const OrganizerSchema = new Schema({
  name: String,
  email: String,
  trips: [TripSchema]
})

module.exports = mongoose.model("Users", UserSchema)
module.exports = mongoose.model("Rides", RideSchema)
module.exports = mongoose.model("Trips", TripSchema)
module.exports = mongoose.model("Organizers", OrganizerSchema)
