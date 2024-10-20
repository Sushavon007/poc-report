const mongoose = require("mongoose");

const competitionOrganised = new mongoose.Schema({
  eventDate: { type: Date },
  competitionType: { type: String },
  competitionName: { type: String },
  poc: { type: String },
});

const CompetitionOrganised = mongoose.model(
  "CompetitionOrganised",
  competitionOrganised
);
module.exports = CompetitionOrganised;
