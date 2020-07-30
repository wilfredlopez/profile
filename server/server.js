const express = require("express");
const path = require("path");

//"out" |'build'
let BUILD_DIR = "build";

const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "..", BUILD_DIR)));

//for nextjs
app.use(
  express.static(path.resolve(__dirname, "..", BUILD_DIR, "_next")),
);

// All remaining requests return the React app, so it can handle routing.
app.get("*", function (request, res) {
  res.sendFile(
    path.resolve(__dirname, "..", BUILD_DIR, "index.html"),
  );
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App Ready on http://localhost:${port}`);
});
