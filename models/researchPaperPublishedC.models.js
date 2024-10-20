const mongoose = require("mongoose");

const researchPaperPublishedC = new mongoose.Schema({
  name: { type: String },
  type: { type: String, enum: ['journal', 'conference', 'bookChapter'] },
  paperInfo: { type: String },
  designation: { type: String, enum: ['student', 'faculty'] },
  poc: { type: String },
});

const ResearchPaperPublishedC = mongoose.model("ResearchPaperPublishedGradeC", researchPaperPublishedC);
module.exports = ResearchPaperPublishedC;
