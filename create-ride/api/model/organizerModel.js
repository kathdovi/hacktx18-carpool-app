"use strict"
import { Trip } from "./tripModel.js"

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Organizer = {
  name: String,
  email: String,
  trips: [Trip]
}

const OrganizerSchema = new Schema(Organizer)

module.exports = mongoose.model("Organizers", OrganizerSchema)
