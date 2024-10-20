const user = require("../models/user.models.js");
const constants = require("../utils/constants.utils.js");
const {
  sendSuccess,
  sendError,
  sendServerError,
} = require("../utils/response.utils.js");
const bcrypt = require("bcryptjs");
const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const {
  sendEmail,
  generateAccountCreationMessage,
} = require("../utils/mailer.utils.js");

const generateAccessToken = async (userId, email, role) => {
  return jwt.sign(
    { id: userId, userEmail: email, role: role },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
};

function generateRandomPassword(length = 10) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

exports.login = expressAsyncHandler(async (req, res) => {
  try {
    const { userEmail, password } = req.body;

    const existingUser = await user.findOne({ userEmail });

    if (!existingUser) {
      return sendError(res, constants.NOT_FOUND, "User not registered");
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return sendError(res, constants.UNAUTHORIZED, "Incorrect password");
    }

    const accessToken = await generateAccessToken(
      existingUser._id,
      existingUser.userEmail,
      existingUser.role
    );
    res.set("Authorization", `Bearer ${accessToken}`);

    sendSuccess(res, constants.OK, "User logged in", {
      token: accessToken,
    });
  } catch (error) {
    sendError(res, constants.INTERNAL_SERVER_ERROR, "Error while logging in");
  }
});

exports.forgetPassword = expressAsyncHandler(async (req, res) => {
  try {
    const { email, newPassword, confirmPassword, getOTP } = req.body;

    if (!OTP || getOTP !== OTP) {
      return sendError(res, constants.VALIDATION_ERROR, "OTP mismatch");
    }

    if (newPassword !== confirmPassword) {
      return sendError(
        res,
        constants.VALIDATION_ERROR,
        "Passwords do not match"
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await user.updateOne({ email }, { password: hashedPassword });

    sendSuccess(res, constants.OK, "Password reset successfully");
  } catch (error) {
    sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while resetting password"
    );
  }
});

exports.updatePassword = expressAsyncHandler(async (req, res) => {
  try {
    const { oldPassword, newPassword, confirmPassword } = req.body;

    const loggedInUser = await user.findById(req.user?.id);

    if (!loggedInUser) {
      return sendError(res, constants.NOT_FOUND, "User not found");
    }

    const isPasswordCorrect = await bcrypt.compare(
      oldPassword,
      loggedInUser.password
    );
    if (!isPasswordCorrect) {
      return sendError(res, constants.UNAUTHORIZED, "Incorrect old password");
    }

    if (newPassword !== confirmPassword) {
      return sendError(
        res,
        constants.VALIDATION_ERROR,
        "Passwords do not match"
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await user.findByIdAndUpdate(
      loggedInUser._id,
      { password: hashedPassword },
      {
        new: true,
        runValidators: true,
      }
    );
    return sendSuccess(res, constants.OK, "Password reset successfully");
  } catch (error) {
    return sendError(
      res,
      constants.INTERNAL_SERVER_ERROR,
      "Error while updating password"
    );
  }
});

exports.adduser = expressAsyncHandler(async (req, res) => {
  try {
    const { userEmail, userContact, department, college, role, contentAccess } =
      req.body;

    if (
      !userEmail ||
      !userContact ||
      !department ||
      !college ||
      !role ||
      !contentAccess
    ) {
      return sendError(
        res,
        constants.VALIDATION_ERROR,
        "All fields are required (userEmail, userContact, department, college, role, contentAccess)"
      );
    }
    const tempPassword = generateRandomPassword(10);

    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    const newUser = new user({
      userEmail,
      userContact,
      password: hashedPassword,
      department,
      college,
      role,
      contentAccess,
    });
    await newUser.save();

    const { message, messageHTML } = generateAccountCreationMessage(
      role,
      userEmail,
      tempPassword
    );

    await sendEmail(userEmail, "User Login Credentials", message, messageHTML);

    sendSuccess(res, constants.CREATED, "User added successfully");
  } catch (error) {
    sendError(res, constants.INTERNAL_SERVER_ERROR, "Error while adding user");
  }
});

exports.edit = expressAsyncHandler(async (req, res) => {});
