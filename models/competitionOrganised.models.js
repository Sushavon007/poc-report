const mongoose = require("mongoose");

const competitionOrganised = new mongoose.Schema({
  eventDate: { type: Date },
  competitionType: { type: String },
  competitionName: { type: String },
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

const CompetitionOrganised = mongoose.model(
  "CompetitionOrganised",
  competitionOrganised
);
module.exports = CompetitionOrganised;
