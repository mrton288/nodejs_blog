const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/blog_education_dev");
    console.log("Connected successful");
  } catch (error) {
    console.log("failed to fail");
  }
}
module.exports = { connect };
