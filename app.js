const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const Users = require("./models/employee");

//const logger = require("./middleware/logger");
const employeeRouter = require("./routes/employee");

const errorController = require("./controllers/error");

const cors = require("cors");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const fs = require("fs");
const https = require("https");
//const webhostname = "rgoka.com";

const https_options = {
  key: fs.readFileSync("./certs/esolv.ca_key.key"),
  cert: fs.readFileSync("./certs/STAR_esolv_ca.crt"),
  ca: fs.readFileSync("./certs/esolv.ca-bundle.crt"),
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", employeeRouter);

//app.use(logger);
// STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use(errorController.get404);

const port = process.env.PORT || 5606;
const httpsServer = https.createServer(https_options, app);

httpsServer.listen(port, () => console.log(`Server started on port ${port}`));
