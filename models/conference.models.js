const mongoose = require("mongoose");

const conference = new mongoose.Schema({
  organizingInstitute: { type: String },
  topic: { type: String },
  date: { type: Date },
  attendedBy: { type: String },
  type: { type: String, enum: ["attended", "organized"] },
  poc: { type: String },
});

const Conference = mongoose.model(
  "Conference",
  conference
);
module.exports = Conference;
