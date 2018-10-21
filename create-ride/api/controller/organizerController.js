'use strict';

const mongoose = require('mongoose')
const Organizer = mongoose.model('Organizers')

exports.readOrganizer = function(req, res) {
  Organizer.findById(req.params.organizerId, function(err, organizer){
    if (err) {
      res.send(err)
    }
    res.json(organizer)
  })
}

exports.createOrganizer = function(req, res) {
  var newOrganizer = new Organizer(req.body)
  newOrganizer().save(function(err, organizer) {
    if (err) {
      res.send(err)
    }
    res.json(organizer)
  })
}

exports.updateOrganizer = function(req, res) {
  Organizer.findOneAndUpdate({id: req.params.organizerId}, req.body, {new: true}, function(err) {
    if (err) {
      res.send(err)
    }
    res.json(organizer)
  })
}


exports.deleteOrganizer = function(req, res) {
  Organizer.remove({
    _id: req.params.organizerId
  }, function(err, organizer) {
    if (err)
      res.send(err)
    res.json({ message: "Organizer successfully deleted" })
  })
}
