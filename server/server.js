const express = require('express')
const path = require('path')


const app = express()

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "..", "build")))


// All remaining requests return the React app, so it can handle routing.
app.get("*", function (request, res) {
    res.sendFile(
        path.resolve(__dirname, "..", "build", "index.html")
    )

})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})