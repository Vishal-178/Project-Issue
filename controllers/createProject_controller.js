const Project = require("../models/project");
// create a new project in data base when form is submitted on create form page
module.exports.project = function (req, res) {
  console.log(req.body);
  Project.create(req.body, (err, userData) => {
    if (err) {
      console.log("error while creating Project");
      return;
    }
    return res.redirect("/");
  });
};
