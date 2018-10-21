'use strict';

const mongoose = require('mongoose')
const User = mongoose.model('Users')

exports.readUser = function(req, res) {
  User.findById(req.params.userId, function(err, user){
    if (err) {
      res.send(err)
    }
    res.json(user)
  })
}

exports.createUser = function(req, res) {
  var newUser = new User(req.body)
  newUser().save(function(err, user) {
    if (err) {
      res.send(err)
    }
    res.json(user)
  })
}

exports.updateUser = function(req, res) {
  User.findOneAndUpdate({id: req.params.userId}, req.body, {new: true}, function(err) {
    if (err) {
      res.send(err)
    }
    res.json(user)
  })
}

exports.deleteUser = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err) {
      res.send(err)
    }
    res.json({ message: "User successfully deleted" })
  })
}
