const mongoose = require("mongoose");

const patentFilled = new mongoose.Schema({
  department: { type: String },
  name: { type: String },
  designation: { type: String },
  patentInfo: { type: String },
  type: { type: String, enum: ["National", "International"] },
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

const PatentFilled = mongoose.model("PatentFilled", patentFilled);
module.exports = PatentFilled;
