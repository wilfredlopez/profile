//@ts-check

const router = require('express').Router()
const { sendEmail } = require('../utils/sendEmail')
const TO_EMAIL = 'wilfreddonaldlo@gmail.com'

/**
 *
 * @param {{ name?: string, subject?: string, message?: string, email?: string }} formData
 */
function isValidForm(formData) {
  const required = ['name', 'subject', 'message', 'email']
  for (let key of required) {
    if (!formData[key] || formData[key] === '') {
      return false
    }
  }
  return true
}
router.post('/api/email', (req, res) => {
  /**
   * @type {{ name: string, subject: string, message: string, email: string }}
   */
  const formValues = req.body

  if (!formValues || !isValidForm(formValues)) {
    console.log(`Invalid form sent in request: `, { formValues })
    res.status(400).json({
      result: 'Failure',
    })
    return
  }
  //TODO: SEND EMAIL
  const options = {
    to: TO_EMAIL,
    subject: formValues.subject,
    text: formValues.message,
    from: formValues.email,
    name: formValues.name,
  }
  sendEmail(options)
  res.json({
    result: 'Success',
  })
})

module.exports = router
