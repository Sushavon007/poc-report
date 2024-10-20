const mongoose = require("mongoose");

const bookPublished = new mongoose.Schema({
  name: { type: String },
  bookName: { type: String },
  publisherName: { type: String },
  designation: { type: String, enum: ['student', 'faculty'] },
  poc: { type: String },
});

const BookPublished = mongoose.model("BookPublished", bookPublished);
module.exports = BookPublished;
