'use strict';

require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routes = require('./routes')
const cors = require('./cors')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/tmsLog', { useNewUrlParser: true })
mongoose.set('useFindAndModify', false)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '..', 'public')))

cors(app)
routes(app)

app.listen(port)
console.log(`The server is running on port ${port}`)