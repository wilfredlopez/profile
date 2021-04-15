//@ts-check
const express = require('express')
const cors = require('cors')
const { IS_PROD } = require('./env')
const { errorHandler, requireOrigin } = require('./middleware')
const EmailController = require('./controllers/emailController')
const app = express()
const PORT = process.env.PORT || 5300

/**
 * @type {cors.CorsOptions}
 */
const corsOptions = {
  origin: IS_PROD ? 'https://wilfredlopez.net/' : '*',
}

app.use(cors(corsOptions))
app.use(express.json())

app.use(requireOrigin)

app.get('/', (_req, res) => {
  res.json({
    api: 'wilfredlopez.net',
  })
})

app.use(EmailController)

app.use(errorHandler)

app.listen(PORT, () => {
  if (!IS_PROD) {
    console.log(`app listening on http://localhost:${PORT}`)
  } else {
    console.log(`app listening in Production Mode`)
  }
})
