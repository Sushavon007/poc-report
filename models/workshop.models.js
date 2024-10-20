const mongoose = require("mongoose");

const workshop = new mongoose.Schema({
  organizingInstitute: { type: String },
  NAME: { type: String },
  date: { type: Date },
  attendedBy: { type: String },
  type: { type: String, enum: ["attended", "organized"] },
  poc: { type: String },
});

const Workshop = mongoose.model("Workshop", workshop);
module.exports = Workshop;
