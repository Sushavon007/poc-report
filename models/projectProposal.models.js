const mongoose = require("mongoose");

const projectProposal = new mongoose.Schema({
  title: { type: String },
  nameOfPrinciple: { type: String },
  nameOfCoPrinciple: { type: String },
  amountGrant: { type: String },
  dateOfSubmission: { type: Date },
  dateOfGranting: { type: Date },
  status: {
    type: String,
    enum: ["applied", "underReview", "granted"],
    default: "applied",
  },
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

const ProjectProposal = mongoose.model("ProjectProposal", projectProposal);
module.exports = ProjectProposal;
