'use strict';

const mongoose = require('mongoose')
const Trip = mongoose.model('Trips')

exports.readTrip = function(req, res) {
  Trip.findById(req.params.tripId, function(err, trip){
    if (err) {
      res.send(err)
    }
    res.json(trip)
  })
}

exports.createTrip = function(req, res) {
  var newTrip = new Trip(req.body)
  newTrip().save(function(err, trip) {
    if (err) {
      res.send(err)
    }
    res.json(trip)
  })
}

exports.updateTrip = function(req, res) {
  Trip.findOneAndUpdate({id: req.params.tripId}, req.body, {new: true}, function(err) {
    if (err) {
      res.send(err)
    }
    res.json(trip)
  })
}

exports.deleteTrip = function(req, res) {
  Trip.remove({
    _id: req.params.tripId
  }, function(err, trip) {
    if (err) {
      res.send(err)
    }
    res.json({ message: "Trip successfully deleted" })
  })
}
