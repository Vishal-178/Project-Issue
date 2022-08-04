const Project = require("../models/project");
// render home page find all the project and display on the home page.
module.exports.home = function (req, res) {
  Project.find({}, (error, data) => {
    if (error) {
      console.log("error while finding created projects");
      return;
    }
    return res.render("home", {
      title: "Home",
      projects: data,
    });
  });
};
