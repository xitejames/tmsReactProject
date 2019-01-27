'use strict';

const LogEntry = require('../models/log_entry')

exports.index = function(req, res) {
  LogEntry.find({}, function(err, logEntry) {
    if (err) res.send(err)
    res.json(logEntry)
  })
}

exports.create = function(req, res) {
  const newLogEntry = new LogEntry(req.body)
  newLogEntry.save(function(err, logEntry) {
    if (err) res.send(err)
    res.json(logEntry)
  })
}

exports.show = function(req, res) {
  LogEntry.findById(req.params.id, function(err, logEntry) {
    if (err) res.send(err)
    res.json(logEntry)
  })
}

exports.update = function(req, res) {
  LogEntry.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function(err, logEntry) {
    if (err) res.send(err)
    res.json(logEntry)
  })
}

exports.destroy = function(req, res) {
  LogEntry.deleteOne({ _id: req.params.id }, function(err, logEntry) {
    if (err) res.send(err)
    res.json({ message: `Log entry (${req.params.id}) was successfully deleted.`})
  })
}