const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const auth = require("./routes/auth.routes");
const form = require("./routes/form.routes")
const helmet = require("helmet");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/", auth);
app.use("/form", form);

module.exports = app;
