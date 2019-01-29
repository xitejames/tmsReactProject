'use strict';

const Image = require('../models/image')

exports.index = function(req, res) {
  Image.find({ logEntryId: req.params.log_entry_id }, function(err, image) {
    if (err) res.send(err)
    res.json(image)
  })
}

exports.show = function(req, res) {
  Image.findById(req.params.id, function(err, image) {
    if (err) res.send(err)
    res.json(image)
  })
}

exports.create = function(req, res) {
  const path = require('path')
  const remove = path.join(__dirname, '..', '..', 'public')
  const relPath = req.file.path.replace(remove, '')
  const newImage = new Image(req.body)
  newImage.logEntryId = req.params.log_entry_id
  newImage.path = relPath
  newImage.save(function(err, image) {
    if (err) res.send(err)
    res.json(image)
  })
}

exports.destroy = function(req, res) {
  Image.deleteOne({ _id: req.params.id }, function(err, image) {
    if (err) res.send(err)
    res.json({ message: `Image (${req.params.id}) was successfully deleted.`})
  })
}