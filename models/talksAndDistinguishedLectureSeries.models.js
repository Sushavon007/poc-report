const mongoose = require("mongoose");

const lecture = new mongoose.Schema({
  name: { type: String },
  date: { type: Date },
  topic: { type: String },
  AttendedBy: { type: String },
  poc: { type: String },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

const Lecture = mongoose.model("Lecture", lecture);
module.exports = Lecture;
