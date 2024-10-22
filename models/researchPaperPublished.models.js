const mongoose = require("mongoose");

const researchPaperPublished = new mongoose.Schema({
  name: { type: String },
  researchType: {
    type: String,
    enum: ["journal", "conference", "bookChapter"],
  },
  paperName: { type: String },
  volNo: { type: String },
  issueNo: { type: String },
  ppNo: { type: String },
  DOI: { type: String },
  month: { type: String },
  year: { type: String },
  researchType: {
    type: String,
    enum: ["SCI", "SCIE", "Scopus", "WoS", "ESCI"],
  },
  nature: { type: String },
  grade: { type: String, enum: ["A", "B", "C"] },
  designation: { type: String, enum: ["student", "faculty"] },
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

const ResearchPaperPublished = mongoose.model(
  "ResearchPaperPublished",
  researchPaperPublished
);
module.exports = ResearchPaperPublished;
