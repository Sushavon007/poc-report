const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userEmail: { type: String, required: true, unique: true },
  userContact: { type: String, required: true },
  password: { type: String, required: true },
  department: { type: String, required: true },
  college: { type: String, required: true },
  role: { type: String, required: true },
  totalMarks: { type: Number, default: 0 },
  contentAccess: {
    type: String,
    enum: ["super", "view", "edit", "none"],
    default: "none",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
