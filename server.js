const express = require("express");
const app = express();
const connectDb = require("./DB/mongodb");
connectDb();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./utils/swagger-output.json');

const port = process.env.PORT || 8000;

app.use(express.json({ extended: false }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/contacts", require("./routes/contacts"));

app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
