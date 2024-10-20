const mongoose = require("mongoose");

const facultyDevelopmentProgrammesAttended = new mongoose.Schema({
  organizedBy: { type: String },
  date: { type: Date },
  topic: { type: String },
  attendedBy: { type: String },
  department: { type: String },
  poc: { type: String },
});

const FacultyDevelopmentProgrammesAttended = mongoose.model("FacultyDevelopmentProgrammesAttended", facultyDevelopmentProgrammesAttended);
module.exports = FacultyDevelopmentProgrammesAttended;
