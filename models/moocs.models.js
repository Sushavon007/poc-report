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

const MOOCS = mongoose.model("Moocs", moocs);
module.exports = MOOCS;
