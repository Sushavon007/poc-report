const mongoose = require("mongoose");

const industrialTour = new mongoose.Schema({
  organizedBy: { type: String },
  date: { type: Date },
  attendedBy: { type: String },
  industryName: { type: String },
  type: { type: String, enum: ["virtual", "real"] },
  poc: { type: String },
});

const IndustrialTour = mongoose.model(
  "IndustrialTour",
  industrialTour
);
module.exports = IndustrialTour;
