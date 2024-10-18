"use strict";

const express = require("express");
const uuid = require("uuid");
let router = express.Router();
const db = require("../mongooseConnect");
const axios = require("axios");
//End points
const Users = require("../models/employee");

const employeeController = require("../controllers/employee_mongo");
router.get("/initiate", employeeController.initiate);
router.get("/all", employeeController.getEmployees);
router.get("/all/en", employeeController.getEmployees);

router.get("/jsonListing", employeeController.getEmployeesJSON);
router.get("/:id([a-fA-F0-9-]{36})", employeeController.getEmployeeById);
router.post("/update", employeeController.updateEmployee);

//router.get("/:id", employeeController.getEmployeeById);

// router.get("/:id", employeeController.getEmployeeById);

// router.route("/take/:id").get(async (req, res) => {
//   let obj = await Users.find({ _id: req.params.id }).exec();
//   obj[0].qty = obj[0].qty - 1;
//   res.send({ obj });
// });

// router.route("/addOne/:id").get(async (req, res) => {
//   let obj = await Users.find({ _id: req.params.id }).exec();
//   obj[0].qty = obj[0].qty + 1;
//   res.send({ obj });
// });

// router.route("/add").post(async (req, res) => {
//   let obj = new Users(req.body);
//   let newID = uuid.v4();
//   obj._id = newID;
//   await obj.save(function (err) {
//     if (err) return console.error(err);
//   });
//   res.send({ obj });
// });

// router.route("/addMany").post(async (req, res) => {
//   req.body.forEach((element) => {
//     let obj = new Users(element);
//     let newID = uuid.v4();
//     obj._id = newID;
//     obj.save(function (err) {
//       if (err) return console.error(err);
//     });
//   });

//   res.sendStatus(200);
// });

// //UPDATE
// router.route("/update").post(async (req, res) => {
//   let payload = req.body;
//   let id = payload._id;
//   delete payload._id;
//   await Users.updateOne({ _id: id }, payload)
//     .then(function () {
//       res.sendStatus(200);
//     })
//     .catch(function (error) {
//       console.log(error); // Failure
//     });
// });

// router.route("/updateById").post(async (req, res) => {
//   let payload = req.body;
//   let id = payload._id;
//   let quantity = payload.qty;

//   await Users.findByIdAndUpdate({ _id: id }, { qty: quantity })
//     .then(function () {
//       res.sendStatus(200);
//     })
//     .catch(function (error) {
//       console.log(error); // Failure
//     });
// });
// // DELETE
// router.route("/delete").delete(async (req, res) => {
//   let payload = req.body.obj._id;
//   await Users.deleteOne({ _id: payload })
//     .then(function () {
//       res.send("deleted");
//     })
//     .catch(function (error) {
//       console.log(error); // Failures
//     });
// });

// // DELETE
// router.route("/deleteAll").delete(async (req, res) => {
//   //let payload = req.body.obj._id;
//   await Users.deleteMany({})
//     .then(function () {
//       res.send("deleted");
//     })
//     .catch(function (error) {
//       console.log(error); // Failure
//     });
// });

// router.route("/test").post(async (req, res) => {
//   let payload = req.body.obj;

//   let test = {
//     access_token:
//       "00D8c000006KOkU!AQUAQK0XV03dZEqwDMQIi_PyMlhKVE3aGz74WnfXUB3971cCHUQ2I_1YUyONt5SzD1IBXWA0n9SY9_20wuQ6bxM0sou46x7J",
//     instance_url: "https://esolvcom-dev-ed.my.salesforce.com",
//     id: "https://login.salesforce.com/id/00D8c000006KOkUEAW/0058c000009t6IAAAY",
//     token_type: "Bearer",
//     issued_at: "1674251124769",
//     signature: "k2QeYLUGemRGXmd8p95T6pXcnJOvndzzM8dvDMwE9UU=",
//   };
//   //let Userss = await Users.find({ user: req.body.user }).exec();
//   res.send(test);
// });

// router.route("/test2").post(async (req, res) => {
//   try {
//     // Define headers for the request
//     const headers = {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       "x-api-client-token":
//         "c9a05c4a44c0d0c3271e11b37598e730b5fc1adf519dda212458dbf10ab32869",
//     };

//     // Make a POST request to the external API with the defined headers
//     const response = await axios.post(
//       "https://rg-esolv.workflows.okta.com/api/flo/fa64d8cd6f1a119701f0ce54e953c000/invoke",
//       req.body,
//       { headers }
//     );

//     // Send back the response received from the external API
//     res.json(response.data);
//   } catch (error) {
//     // If an error occurs, send an error response
//     res
//       .status(500)
//       .json({ error: "An error occurred while calling the external API." });
//   }
// });
module.exports = router;
