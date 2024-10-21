const jwt = require("jsonwebtoken");
const { sendError } = require("../utils/response.utils");
const constants = require("../utils/constants.utils");
const user = require("../models/user.models");
const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();
app.use(cookieParser());

exports.authenticateToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.replace("Bearer ", "") || req.cookies['sid'];

    if (!token) {
      return sendError(res, constants.UNAUTHORIZED, "Token unavailable");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userInfo = await user.findById(decoded.id);

    if (!userInfo) {
      return sendError(res, constants.NOT_FOUND, "User not found");
    }

    req.user = userInfo;
    next();
  } catch (error) {
    return sendError(res, constants.NOT_ACCEPTABLE, "Invalid or expired token");
  }
};
