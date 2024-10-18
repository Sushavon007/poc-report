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
const { sendEmail, generateAccountCreationMessage } = require("../utils/mailer.utils.js");

let OTP = "";

const generateAccessToken = async (userId, email, role) => {
  return jwt.sign(
    { id: userId, userEmail: email, role: role },
    process.env.ACCESS_TOKEN_SECRET || "5ziOr1xY6VhEXMe7btdT8Xhl101uWfkq282pRoiAAag6cv9BJh8cgGuOJjbO",
    { expiresIn: "1d" }
  );
};

function generateRandomPassword(length = 10) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  }

exports.register = expressAsyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return sendError(
      res,
      constants.VALIDATION_ERROR,
      "All fields are required (firstName, lastName, email, password)"
    );
  }

  try {
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return sendError(
        res,
        constants.CONFLICT,
        "User with this email already exists"
      );
    }

    if (password !== confirmPassword) {
      return sendError(
        res,
        constants.VALIDATION_ERROR,
        "Passwords do not match"
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

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

    sendSuccess(res, constants.CREATED, "User registered successfully!");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.getotp = expressAsyncHandler(async (req, res) => {
  try {
    const { email, type } = req.body;

    const existingUser = await user.findOne({ email });

    if (type === "register" && existingUser) {
      return sendError(
        res,
        constants.CONFLICT,
        "User with this email already exists"
      );
    } else if (type === "forgetPassword" && !existingUser) {
      return sendError(res, constants.NOT_FOUND, "User not registered");
    }

    OTP = Math.floor(1000 + Math.random() * 9000).toString();

    let message, messageHTML;

    if (type === "register") {
      message = `To create your account, please use this OTP: ${OTP}`;
      messageHTML = `
        <p>To create your account, use this OTP:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>OTP:</strong> ${OTP}</p>
      `;
    } else if (type === "forgetPassword") {
      message = `To reset your password, please use this OTP: ${OTP}`;
      messageHTML = `
        <p>To reset your password, use this OTP:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>OTP:</strong> ${OTP}</p>
      `;
    }

    await sendEmail(email, "OTP Verification", message, messageHTML);

    sendSuccess(res, constants.OK, "OTP sent to your email");
  } catch (error) {
    sendServerError(res, error);
  }
});

exports.verify = expressAsyncHandler(async (req, res) => {
  try {
    const { email, getOTP } = req.body;

    if (!OTP) {
      return sendError(res, constants.NOT_FOUND, "No OTP found for this email");
    }

    if (getOTP !== OTP) {
      return sendError(res, constants.VALIDATION_ERROR, "OTP mismatch");
    }

    sendSuccess(res, constants.ACCEPTED, "OTP matched");
  } catch (error) {
    sendServerError(res, error);
  }
});

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
    console.log(accessToken);
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

    const loggedInUser = await user.findById(req.user?._id);

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
    const { userEmail, userContact, department, college, role, contentAccess } = req.body;

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

    const { message, messageHTML } = generateAccountCreationMessage(role, userEmail, tempPassword);

    await sendEmail(userEmail, "User Login Credentials", message, messageHTML);

    sendSuccess(res, constants.OK, "User added successfully");
  } catch (error) {
    sendError(res, constants.INTERNAL_SERVER_ERROR, "Error while adding user");
  }
});

exports.edit = expressAsyncHandler( async(req, res) => {

});
