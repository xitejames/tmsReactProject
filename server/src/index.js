'use strict';
//Third Party imports
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//Local imports 
const routes = require('./routes')
const cors = require('./cors')
//Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/tmsDB', 
                            { useNewUrlParser: true })
mongoose.set('useFindAndModify', false)

//Express.js
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

cors(app)
routes(app)

app.listen(port)
console.log("THIS SERVER IS ACTUALLY RUNNING ON PORT: " + port )
