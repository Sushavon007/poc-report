const express = require("express");
const { register, login, getotp, verify, forgetPassword, updatePassword, adduser } = require("../controllers/auth.controllers.js");
const { authenticateToken } = require("../middlewares/auth.middlewares.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/getotp", getotp);
router.post("/verify", verify);
router.patch("/forgetpassword", forgetPassword);
router.patch("/updatepassword", authenticateToken, updatePassword);
router.post("/adduser", adduser);
// router.patch("/edit", authenticateRole, edit)

module.exports = router;