const Employee = require("../models/employee_mongo");

const departments = require("../data/departments.json");
const labels = require("../data/labels.json");
const titles = require("../data/titles.json");
const axios = require("axios");

exports.getEmployees = async (req, res, next) => {
  let employees = await Employee.find({}).exec();
  const language = req.query.lang || "fr"; // Default to 'en' if not specified
  res.render("employees/list", {
    empls: employees,
    pageTitle: "Employees",
    labels: labels,
    language: language,
    path: "/",
    hasEmployees: employees.length > 0,
  });
};

exports.getEmployeesJSON = async (req, res, next) => {
  let employees = await Employee.find({}).exec();
  res.send(employees);
};

exports.getEmployeeById = async (req, res, next) => {
  let employee = await Employee.find({ _id: req.params.id }).exec();
  const language = req.query.lang || "fr"; // Default to 'en' if not specified
  res.render("employees/edit", {
    employee: employee[0],
    pageTitle: "Employee",
    office_departments: departments,
    office_titles: titles,
    labels: labels,
    language: language,
    path: "/",
    formAction: "./update",
    updated: false,
  });
};

exports.updateEmployee = async (req, res, next) => {
  let payload = req.body;
  let id = payload._id;
  delete payload._id;
  const language = req.query.lang || "fr"; // Default to 'en' if not specified
  const employee = await Employee.findByIdAndUpdate({ _id: id }, payload);

  const url =
    "https://rg-esolv.workflows.okta.com/api/flo/db434cb596a4e0fd7866e4879aa7651e/invoke";
  const token =
    "7bd6484e7aa5fa070c952b0836a71a2910034d5ac23bcc68b5279199927ea8ed";
  const response = await axios.post(`${url}?clientToken=${token}`, {
    // Optionally, you can include a request body here
    // data: { key: 'value' },
  });

  res.redirect("/all?lang=" + language);
};

exports.initiate = async (req, res, next) => {
  let payload = {
    existingPicture: "lisa.png",
    userName: "Lisa.Simpson@rgoka.com",
    firstName: "Lisa",
    lastName: "Simpson",
    title: "Développeur",
    department: "Technologies de l'Information",
    active: "false",
    mobilePhone: "111-111-1111",
  };
  let id = "7d79e8c5-17e3-465a-b22d-217706900018";

  const language = req.query.lang || "fr"; // Default to 'en' if not specified
  const employee = await Employee.findByIdAndUpdate({ _id: id }, payload);

  const url =
    "https://rg-esolv.workflows.okta.com/api/flo/db434cb596a4e0fd7866e4879aa7651e/invoke";
  const token =
    "7bd6484e7aa5fa070c952b0836a71a2910034d5ac23bcc68b5279199927ea8ed";
  const response = await axios.post(`${url}?clientToken=${token}`, {
    // Optionally, you can include a request body here
    // data: { key: 'value' },
  });

  const url2 =
    "https://rg-esolv.workflows.okta.com/api/flo/5d31f7a3fd60232161c50d382ec8f2fd/invoke";
  const token2 =
    "ebb53c9507ba307a5f38b9698719363f3d193942c7d8b4c54f6331756b9cb12f";
  const response2 = await axios.post(`${url2}?clientToken=${token2}`, {
    // Optionally, you can include a request body here
    // data: { key: 'value' },
  });

  res.redirect("/all?lang=" + language);
};

// exports.initiate = async (req, res, next) => {
//   const language = req.query.lang || "fr"; // Default to 'en' if not specified
//   // const employee = await Employee.findByIdAndUpdate({ _id: id }, payload);

//   const url =
//     "https://rg-esolv.workflows.okta.com/api/flo/5d31f7a3fd60232161c50d382ec8f2fd/invoke";
//   const token =
//     "ebb53c9507ba307a5f38b9698719363f3d193942c7d8b4c54f6331756b9cb12f";
//   const response = await axios.post(`${url}?clientToken=${token}`, {
//     // Optionally, you can include a request body here
//     // data: { key: 'value' },
//   });

//   res.redirect("/all?lang=" + language);
// };
