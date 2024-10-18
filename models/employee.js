const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

const p = path.join(rootDir, "data", "Employee.json");

const getEmployeesFromFile = (cb) => {
  //cb is a callback

  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Employee {
  constructor(employeeObject) {
    this.name = name;
  }

  save() {
    getEmployeesFromFile((employees) => {
      employees.push(this);
      fs.writeFile(p, JSON.stringify(employees), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    //cb is a callback
    getEmployeesFromFile(cb);
  }
};
