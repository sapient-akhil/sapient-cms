const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
require("./config/mongodb");
const createError = require("http-errors");
const fileupload = require("express-fileupload");
app.use(fileupload());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var cors = require("cors");
app.use(cors());

app.all("/", (req, res) => {
  res.send("Sapient-cms is strat successfully...");
});

app.use("/api/admin", require("./routes/admin.routes"));
app.use("/api", require("./routes/users.routes"));
app.use("/api", require("./routes/common.routes"));

app.use(async (req, res, next) => {
  const err = createError.BadRequest("URL not found");
  next(err);
});

app.use((err, req, res, next) => {
  console.log("error", err);
  res.status(err.status || 500);
  res.send({
    success: false,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
