const express = require("express");

const app = express();
const port = 8000;

app.get("/", function (req, res) {
  res.send("Manuel Zamalloa");
});

app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
