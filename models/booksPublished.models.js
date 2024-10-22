const mongoose = require("mongoose");

const bookPublished = new mongoose.Schema({
  name: { type: String },
  bookName: { type: String },
  isbn_issn: {type: String},
  month: {type: String},
  year: {type: String},
  scopes: {type: String},
  ugcCare: {type: String},
  publisherName: { type: String },
  designation: { type: String, enum: ["student", "faculty"] },
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

const BookPublished = mongoose.model("BookPublished", bookPublished);
module.exports = BookPublished;
