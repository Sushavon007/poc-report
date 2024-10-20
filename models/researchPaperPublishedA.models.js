const mongoose = require("mongoose");

const researchPaperPublishedA = new mongoose.Schema({
  name: { type: String },
  type: { type: String, enum: ['journal', 'conference', 'bookChapter'] },
  paperInfo: { type: String },
  designation: { type: String, enum: ['student', 'faculty'] },
  poc: { type: String },
});

const ResearchPaperPublishedA = mongoose.model("ResearchPaperPublishedGradeA", researchPaperPublishedA);
module.exports = ResearchPaperPublishedA;
