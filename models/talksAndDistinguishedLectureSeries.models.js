const mongoose = require("mongoose");

const lecture = new mongoose.Schema({
  name: { type: String },
  date: { type: Date },
  topic: { type: String },
  AttendedBy: { type: String },
  poc: { type: String },
  obtainedMarks: { type: Number },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  hasContentAccess: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  department: {
    type: String,
  },
});

const Lecture = mongoose.model("Lecture", lecture);
module.exports = Lecture;
