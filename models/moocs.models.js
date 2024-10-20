const mongoose = require("mongoose");

const moocs = new mongoose.Schema({
  facultyName: { type: String },
  moduleName: { type: String },
  platformUsed: { type: String },
  dateOfLaunching: { type: Date },
  documentLink: { type: String },
  eContent: { type: String },
  mediaLink: { type: String },
  poc: { type: String },
});

const MOOCS = mongoose.model("Moocs", moocs);
module.exports = MOOCS;
