'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LogEntrySchema = new Schema ({ 
    no: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    keywords: {
        type: String,
        required: true,        
    },
    createdAt: {
        type: Date,
        default: Date.new,
    },

})

module.exports = mongoose.model('LogEntry', LogEntrySchema)