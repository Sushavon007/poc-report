const mongoose = require("mongoose");

const consultancy = new mongoose.Schema({
  orderNo: { type: Number },
  facultyName: { type: String },
  companyName: { type: String },
  orderAmount: { type: Number },
  orderReceiveDate: { type: Date },
  status: { type: String, enum: ["ongoing", "completed"] },
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

const Consultancy = mongoose.model("Consultancy", consultancy);
module.exports = Consultancy;
