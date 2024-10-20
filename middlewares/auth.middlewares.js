const jwt = require("jsonwebtoken");
const { sendError } = require("../utils/response.utils");
const constants = require("../utils/constants.utils");
const user = require("../models/user.models");

exports.authenticateToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.replace("Bearer ", "");

    if (!token) {
      return sendError(res, constants.UNAUTHORIZED, "Token unavailable");
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const userInfo = await user.findById(decoded.id);

    if (!userInfo) {
      return sendError(res, constants.NOT_FOUND, "User not found");
    }

    req.user = userInfo;
    next();
  } catch (error) {
    return sendError(res, constants.UNAUTHORIZED, "Invalid or expired token");
  }
};
