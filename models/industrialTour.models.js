const mongoose = require("mongoose");

const industrialTour = new mongoose.Schema({
  organizedBy: { type: String },
  date: { type: Date },
  industryName: { type: String },
  attendedBy: { type: String },
  type: { type: String, enum: ["virtual", "real"] },
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

const IndustrialTour = mongoose.model(
  "IndustrialTour",
  industrialTour
);
module.exports = IndustrialTour;
