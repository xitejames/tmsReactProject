'use strict';

require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

const routes = require('./routes')
const cors = require('./cors')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/tms-log', { useNewUrlParser: true })
mongoose.set('useFindAndModify', false)

//let app use body parser and make sure it takes Json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '..', 'public')))

cors(app)
routes(app)

app.listen(port)
console.log(`The tms server is running on port ${port}`)