const Employee = require("../models/employee");

exports.getAddEmployee = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Employee",
    path: "/admin/add-product",
    formCSS: true,
    productCSS: true,
    activeAddEmployee: true,
  });
};

exports.postAddEmployee = (req, res, next) => {
  const employee = new Employee(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getEmployees = (req, res, next) => {
  Employee.fetchAll((employees) => {
    res.render("employees/list", {
      empls: employees,
      pageTitle: "Employees",
      path: "/",
      hasEmployees: employees.length > 0,
    });
  });
};

exports.getEmployee = (req, res, next) => {
  Employee.fetchAll((employees) => {
    res.render("employees/list", {
      empls: employees,
      pageTitle: "Employees",
      path: "/",
      hasEmployees: employees.length > 0,
    });
  });
};
