const mongoose = require("mongoose");

const seminer = new mongoose.Schema({
  organizingInstitute: { type: String },
  topic: { type: String },
  date: { type: Date },
  attendedBy: { type: String },
  type: { type: String, enum: ["attended", "organized"] },
  poc: { type: String },
});

const Seminer = mongoose.model("Seminer", seminer);
module.exports = Seminer;
