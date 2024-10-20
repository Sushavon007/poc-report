const mongoose = require("mongoose");

const researchPaperPublishedB = new mongoose.Schema({
  name: { type: String },
  type: { type: String, enum: ['journal', 'conference', 'bookChapter'] },
  paperInfo: { type: String },
  designation: { type: String, enum: ['student', 'faculty'] },
  poc: { type: String },
});

const ResearchPaperPublishedB = mongoose.model("ResearchPaperPublishedGradeB", researchPaperPublishedB);
module.exports = ResearchPaperPublishedB;
