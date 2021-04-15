const nodemailer = require('nodemailer')
const { GMAIL_EMAIL, GMAIL_PASS } = require('../env')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_EMAIL,
    pass: GMAIL_PASS,
  },
})

/**
 *
 * @param {{text: string, to?:string, subject: string, from?:string, name?:string}} options
 */
function sendEmail(options) {
  const {
    subject,
    text,
    to = 'wilfreddonaldlo@gmail.com',
    from,
    name,
  } = options
  transporter.sendMail(
    {
      to,
      from,
      sender: {
        address: from,
        name,
      },
      text,
      subject,
    },
    (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      //could save data to database:
      //   const saveToDB = {
      //       messageId: data.messageId,
      //       subject,
      //       text,
      //       from,
      //       name,
      //       createdAt: new Date()
      //   }
      console.log('Message Sent!')
    }
  )
}

module.exports = {
  sendEmail,
}
