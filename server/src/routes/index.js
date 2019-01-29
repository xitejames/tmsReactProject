'use strict';

module.exports = function(app) {
  const logEntries = require('./log_entries')
  const images = require('./images')
  logEntries(app)
  images(app)
}