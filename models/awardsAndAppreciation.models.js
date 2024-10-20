const mongoose = require("mongoose");

const bookPublished = new mongoose.Schema({
  userEmail: { type: String, required: true, unique: true },
  userContact: { type: String, required: true },
  password: { type: String, required: true },
  department: { type: String, required: true },
  college: { type: String, required: true },
  role: { type: String, required: true },
  contentAccess: { type: String, enum: ['all', 'view', 'edit'], default: 'view', required: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;