const mongoose = require("mongoose");

const triMentoringSystem = new mongoose.Schema({
  organizingBy: { type: String },
  date: { type: Date },
  takenBy: { type: String },
  attendedBy: { type: String },
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

const TriMentoringSystem = mongoose.model(
  "TriMentoringSystem",
  triMentoringSystem
);
module.exports = TriMentoringSystem;
