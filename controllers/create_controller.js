const Project = require("../models/project");
// use to render create project page
module.exports.createProject = function (req, res) {
  return res.render("createProject", {
    title: "Create Project",
  });
};
// use to render create Issue page
module.exports.createIssue = function (req, res) {
  const issueList = [
    "Payment",
    "Security",
    "Review",
    "Design",
    "Statement",
    "frontend",
    "backend",
    "node",
    "documentation",
    "Bug",
    "Feature",
    "cicd",
    "performance",
    "UX",
    "API",
    "database",
    "email",
    "inDev",
  ];
  if (req.query.id) {
    Project.findById(req.query.id, (error, data) => {
      if (error) {
        console.log("error while finding ID or wrong ID");
        return res.render("errorPage", { title: "Error" });
      }
      return res.render("createIssue", {
        title: "create Issue",
        id: req.query.id,
        issueList: issueList,
      });
    });
  } else {
    return res.redirect("/");
  }
};
