//@ts-check
const { IS_PROD } = require('../env')

function errorHandler(err, _req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.json({ error: err })
}

function requireOrigin(req, res, next) {
  if (IS_PROD && req.headers.host !== 'wilfredlopez.net') {
    return res.status(401).json({
      error: 'Unauthorized',
    })
  }
  next()
}

module.exports = {
  errorHandler,
  requireOrigin,
}
