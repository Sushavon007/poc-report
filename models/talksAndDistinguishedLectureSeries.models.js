const mongoose = require("mongoose");

const lecture = new mongoose.Schema({
  name: { type: String },
  date: { type: Date },
  topic: { type: String },
  AttendedBy: { type: String },
  poc: { type: String },
});

const Lecture = mongoose.model("Lecture", lecture);
module.exports = Lecture;
