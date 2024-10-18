const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);
const connection = process.env.DB;

//Db connection
mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", function (error) {
  return console.log(error);
});
db.once("open", () => {
  console.log("Connected to DB");
});

module.exports = mongoose.connection;
