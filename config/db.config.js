const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.DB_STRING}/POC_Report`);
    console.log(
      "database Connected"
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;