const mongoose = require("mongoose");

const patentFilled = new mongoose.Schema({
  department: { type: String },
  name: { type: String },
  designation: { type: String },
  topicName: { type: String },
  dateOfFilling: { type: Date },
  type: { type: String, enum: ["National", "International"] },
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

const PatentFilled = mongoose.model("PatentFilled", patentFilled);
module.exports = PatentFilled;
