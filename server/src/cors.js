'use strict';

module.exports = function(app) {
  const cors = require('cors')
  const corsOptions = {
    origin: function(origin, callback) {
      if (process.env.CORS_WHITELIST.split(' ').indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS configuration'))
      }
    },
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  }
  app.options('*', cors(corsOptions))
  app.use(cors(corsOptions))
}