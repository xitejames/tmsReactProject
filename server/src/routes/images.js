'use strict';

module.exports = function(app) {
  const fs = require('fs')
  const path = require('path')
  const multer = require('multer')

  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      const uploadsDir = path.join(__dirname, '..', '..', 'public', 'uploads', `${Date.now()}`)
      fs.mkdirSync(uploadsDir)
      cb(null, uploadsDir)
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname)
    }
  })

  const upload = multer({ storage })
  const controller = require('../controllers/images')

  app.route('/log-entries/:log_entry_id/images')
     .get(controller.index)
     .post(upload.single("data"), controller.create)

  app.route('/images/:id')
     .get(controller.show)
     .delete(controller.destroy)
}