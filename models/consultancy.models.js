const mongoose = require("mongoose");

const consultancy = new mongoose.Schema({
  orderNo: { type: Number },
  facultyName: { type: String },
  companyName: { type: String },
  orderAmount: { type: Number },
  orderReceiveDate: { type: Date },
  status: { type: String, enum: ["ongoing", "completed"] },
  poc: { type: String },
});

const Consultancy = mongoose.model("Consultancy", consultancy);
module.exports = Consultancy;
