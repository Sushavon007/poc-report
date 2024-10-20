const mongoose = require("mongoose");

const triMentoringSystem = new mongoose.Schema({
  organizingBy: { type: String },
  date: { type: Date },
  takenBy: { type: String },
  attendedBy: { type: String },
  poc: { type: String },
});

const TriMentoringSystem = mongoose.model(
  "TriMentoringSystem",
  triMentoringSystem
);
module.exports = TriMentoringSystem;
