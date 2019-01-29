'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LogEntrySchema = new Schema({
  no: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  }, 
  author: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.new
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})

LogEntrySchema.virtual('images', {
  ref: 'Image',
  localField: '_id',
  foreignField: 'logEntryId'
})

module.exports = mongoose.model('LogEntry', LogEntrySchema)