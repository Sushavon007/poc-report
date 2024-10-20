const mongoose = require("mongoose");

const facultyDevelopmentProgrammesConducted = new mongoose.Schema({
  date: { type: Date },
  department: { type: String },
  topic: { type: String },
  conductedBy: { type: String },
  poc: { type: String },
});

const FacultyDevelopmentProgrammesConducted = mongoose.model("FacultyDevelopmentProgrammesConducted", facultyDevelopmentProgrammesConducted);
module.exports = FacultyDevelopmentProgrammesConducted;
