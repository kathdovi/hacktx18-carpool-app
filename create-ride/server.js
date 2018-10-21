const express = require("express"),
  app = express(),
  port = process.env.PORT || 8080,
  bodyParser = require("body-parser")
  mongoose = require("mongoose"),
  Model = require("./api/model/Model.js"),
  organizerController = require("./api/controller/organizerController.js"),
  rideController = require("./api/controller/rideController.js"),
  tripController = require("./api/controller/tripController.js"),
  userController = require("./api/controller/userController.js")

app.listen(port)
mongoose.connect("mongodb://joshuaj1397:Blind1572!@carpool-shard-00-00-hogxs.mongodb.net:27017,carpool-shard-00-01-hogxs.mongodb.net:27017,carpool-shard-00-02-hogxs.mongodb.net:27017/test?ssl=true&replicaSet=carpool-shard-0&authSource=admin&retryWrites=true")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.delete('/api/delete-organizer', organizerController.deleteOrganizer)
app.delete('/api/delete-ride', rideController.deleteRide)
app.delete('/api/delete-trip', tripController.deleteTrip)
app.delete('/api/delete-user', userController.deleteUser)

app.put('/api/update-organizer', organizerController.updateOrganizer)
app.put('/api/update-ride', rideController.updateRide)
app.put('/api/update-trip', tripController.updateTrip)
app.put('/api/update-user', userController.updateUser)

app.get('/api/read-organizer', organizerController.readOrganizer)
app.get('/api/read-ride', rideController.readRide)
app.get('/api/read-trip', tripController.readTrip)
app.get('/api/read-user', userController.readUser)

app.post('/api/create-organizer', organizerController.createOrganizer)
app.post('/api/create-ride', rideController.createRide)
app.post('/api/create-trip', tripController.createTrip)
app.post('/api/create-user', userController.createUser)

console.log("REST API started on: " + port);
