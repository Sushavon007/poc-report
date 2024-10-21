const mongoose = require("mongoose");

const facultyDevelopmentProgrammesConducted = new mongoose.Schema({
  date: { type: Date },
  department: { type: String },
  topic: { type: String },
  conductedBy: { type: String },
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
});

const FacultyDevelopmentProgrammesConducted = mongoose.model("FacultyDevelopmentProgrammesConducted", facultyDevelopmentProgrammesConducted);
module.exports = FacultyDevelopmentProgrammesConducted;
