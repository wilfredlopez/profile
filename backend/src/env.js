const dotenv = require('dotenv')

dotenv.config()
const IS_PROD = process.env.NODE_ENV === 'production'
const GMAIL_EMAIL = process.env.GMAIL_EMAIL || ''
const GMAIL_PASS = process.env.GMAIL_PASS || ''

module.exports = {
  IS_PROD,
  GMAIL_EMAIL,
  GMAIL_PASS,
}
