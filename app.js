const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const auth = require("./routes/auth.routes");
const formCreate = require("./routes//formCreate.routes");
const formUpdate = require("./routes/formUpdate.routes");
const formApprove = require("./routes/formApprove.routes");
const formReject = require("./routes/formReject.routes");
const formAccess = require("./routes/formAccess.routes");
const display = require("./routes/display.routes");
const helmet = require("helmet");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/", auth);
app.use("/create", formCreate);
app.use("/update", formUpdate);
app.use("/approve", formApprove);
app.use("/reject", formReject);
app.use("/access", formAccess);
app.use("/dashboard", display);

module.exports = app;
