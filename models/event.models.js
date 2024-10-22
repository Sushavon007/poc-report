const mongoose = require("mongoose");

const event = new mongoose.Schema({
  organizingInstitute: { type: String },
  topic: { type: String },
  date: { type: Date },
  attendedBy: { type: String },
  type: { type: String, enum: ["attended", "organized"] },
  eventType: { type: String, enum: ["seminer", "conference", "workshop"] },
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

const Event = mongoose.model("event", event);
module.exports = Event;
