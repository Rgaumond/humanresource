const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema(
  {
    _id: String,
    userName: String,
    firstName: String,
    lastName: String,
    title: String,
    department: String,
    active: Boolean,
    secondEmail: String,
    mobilePhone: String,
    apps: String,
    picture: String,
  },
  { collection: "User Xaas" }
);

module.exports = mongoose.model("Employee", searchSchema);
