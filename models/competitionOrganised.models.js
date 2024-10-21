const mongoose = require("mongoose");

const competitionOrganised = new mongoose.Schema({
  eventDate: { type: Date },
  competitionType: { type: String },
  competitionName: { type: String },
  poc: { type: String },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

const CompetitionOrganised = mongoose.model(
  "CompetitionOrganised",
  competitionOrganised
);
module.exports = CompetitionOrganised;
