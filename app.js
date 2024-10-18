const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const auth = require("./routes/auth.routes");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// app.use("/", require("./routes/home.routes.js"));

app.use("/", auth);

module.exports = app;
