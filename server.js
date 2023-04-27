const express = require("express");
const app = express();
const connectDb = require("./DB/mongodb");
connectDb();

const port = process.env.PORT || 8000;

app.use(express.json({ extended: false }));

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
