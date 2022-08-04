const Project = require("../models/project");
const Issue = require("../models/issue");
const { findByIdAndUpdate } = require("../models/project");
// this is the use for detail page when use click on any project
// it will render the detail of the project.
module.exports.detail = async function (req, res) {
  console.log(":)-- ", req.query);
  if (req.query.id) {
    try {
      const project = await Project.findById(req.query.id);
      const issue = await project.issueList.map(async (issue) => {
        try {
          const list = await Issue.findById(issue);
          return list;
        } catch (error) {}
      });

      Promise.all(issue).then((data) => {
        let newArr = [];
        if (req.query.filter1 && req.query.filter2) {
          for (let i = 0; i < data.length; i++) {
            let checkOne = data[i].label.includes(req.query.filter1);
            let checkTwo = data[i].label.includes(req.query.filter2);
            if (checkOne && checkTwo) {
              newArr.push(data[i]);
            }
          }
        } else if (req.query.filter1 || req.query.filter2) {
          for (let i = 0; i < data.length; i++) {
            data[i].label.map((element) => {
              if (element) {
                if (
                  element === req.query.filter1 ||
                  element === req.query.filter2
                ) {
                  const index = newArr.findIndex(
                    (object) => object._id === data[i]._id
                  );

                  if (index === -1) {
                    newArr.push(data[i]);
                  }
                }
              }
            });
          }
        } else {
          newArr = data;
        }
        return res.render("projectDetail", {
          title: "Project Detail",
          project: project,
          issues: newArr,
          id: req.query.id,
        });
      });
    } catch (error) {}
  }
};
