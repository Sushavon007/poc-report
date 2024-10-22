const express = require("express");
const { login, forgetPassword, updatePassword, addUser } = require("../controllers/auth.controllers.js");
const { authenticateToken } = require("../middlewares/auth.middlewares.js");

const router = express.Router();

router.post("/login", login);
router.post("/addser", addUser);
router.patch("/forgetpassword", forgetPassword);
router.patch("/updatepassword", authenticateToken, updatePassword);

module.exports = router;