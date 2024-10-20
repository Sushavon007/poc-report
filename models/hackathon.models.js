const mongoose = require("mongoose");

const hackathon = new mongoose.Schema({
  name: { type: String },
  date: { type: Date },
  noOfParticipants: { type: Number },
  poc: { type: String },
});

const Hackathon = mongoose.model("Hackathon", hackathon);
module.exports = Hackathon;
