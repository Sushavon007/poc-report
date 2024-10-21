const mongoose = require("mongoose");

const event = new mongoose.Schema({
  organizingInstitute: { type: String },
  topic: { type: String },
  date: { type: Date },
  attendedBy: { type: String },
  type: { type: String, enum: ["attended", "organized"] },
  eventType: { type: String, enum: ["seminer", "conference", "workshop"] },
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

const Event = mongoose.model("event", event);
module.exports = Event;
