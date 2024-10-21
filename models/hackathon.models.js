const mongoose = require("mongoose");

const hackathon = new mongoose.Schema({
  eventName: { type: String },
  date: { type: Date },
  noOfParticipants: { type: Number },
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
});

const Hackathon = mongoose.model("Hackathon", hackathon);
module.exports = Hackathon;
