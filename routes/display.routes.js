const express = require("express");
const { display } = require("../controllers/display.controllers.js");
const { authenticateToken } = require("../middlewares/auth.middlewares.js");

const router = express.Router();

router.post("/",authenticateToken, display);

module.exports = router;