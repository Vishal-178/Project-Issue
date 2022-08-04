const Project = require("../models/project");
const Issue = require("../models/issue");
const { isObjectIdOrHexString } = require("mongoose");
// this is used to delete project in database and also to delete issue of that project.
module.exports.project = async function (req, res) {
  try {
    const project = await Project.findById(req.query.id);
    project.issueList.map(async (element) => {
      try {
        const issue = await Issue.findById(element);
        issue.remove();
      } catch (error) {
        console.log("error while removing issue in folder delete_collection");
      }
    });
    project.remove();
    return res.redirect("/");
  } catch (error) {
    console.log("error in file delete_collection");
    res.redirect("/");
  }
};
// this is use to delete issue in data base.
module.exports.issue = async function (req, res) {
  Project.updateOne(
    { _id: req.query.idd },
    {
      $pull: { issueList: req.query.id },
    },
    async (err, doc) => {
      if (err) {
        console.log(err);
      }
      const issue = await Issue.findById(req.query.id);
      issue.remove();
      res.redirect("back");
    }
  );
  return;
};
