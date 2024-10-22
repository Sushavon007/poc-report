const mongoose = require("mongoose");

const triMentoringSystem = new mongoose.Schema({
  organizingBy: { type: String },
  date: { type: Date },
  takenBy: { type: String },
  attendedBy: { type: String },
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

const TriMentoringSystem = mongoose.model(
  "TriMentoringSystem",
  triMentoringSystem
);
module.exports = TriMentoringSystem;
