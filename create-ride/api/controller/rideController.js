'use strict';

const mongoose = require('mongoose')
const Ride = mongoose.model('Rides')

exports.readRide = function(req, res) {
  Ride.findById(req.params.rideId, function(err, ride){
    if (err) {
      res.send(err)
    }
    res.json(ride)
  })
}

exports.createRide = function(req, res) {
  var newRide = new Ride(req.body)
  newRide().save(function(err, ride) {
    if (err) {
      res.send(err)
    }
    res.json(ride)
  })
}

exports.updateRide = function(req, res) {
  Ride.findOneAndUpdate({id: req.params.rideId}, req.body, {new: true}, function(err) {
    if (err) {
      res.send(err)
    }
    res.json(ride)
  })
}

exports.deleteRide = function(req, res) {
  Ride.remove({
    _id: req.params.rideId
  }, function(err, ride) {
    if (err) {
      res.send(err)
    }
    res.json({ message: "Ride successfully deleted" })
  })
}
