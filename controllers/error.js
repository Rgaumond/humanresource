const path = require("path");

exports.get404 = (req, res, next) => {
  console.log(path.join(__dirname, "views", "employees/404.ejs"));
  res.status(404).render("employees/404"), {
    path: "/404",
  };
};
