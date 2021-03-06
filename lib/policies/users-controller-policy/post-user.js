const fs = require('fs')
const formidable = require('formidable')


module.exports = (req, res, next) => {
  const form = new formidable.IncomingForm()

  form.parse(req, (err, fields, files) => {
    req.body.fields = fields
    req.body.file = files.file
    next()
  })
}
