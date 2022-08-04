const Project = require("../models/project");
const Issue = require("../models/issue");
const { ObjectId } = require("bson");
// creating issue when form is submitted
module.exports.issue = function (req, res) {
  console.log("level 1: ", req.body);
  if (req.query.id) {
    console.log("level 2: ", req.query.id);
    Project.findById(req.query.id, (error, data) => {
      if (error) {
        console.log("error while finding id or no project available");
        return res.render("errorPage", { title: "Error" });
      }
      Issue.create(req.body, (error, data) => {
        if (error) {
          console.log("error creating issue");
          return res.render("errorPage", { title: "Error" });
        }
        console.log("data -- ", data._id);
        Project.updateOne(
          { _id: ObjectId(req.query.id) },
          { $push: { issueList: data._id } },
          (error, data) => {
            if (error) {
              console.log("here is the eeeeee");
              return res.render("errorPage", { title: "Error" });
            } else {
              return res.redirect(`/detailpage/?id=${req.query.id}`);
            }
          }
        );
      });

      //
    });
  } else {
    return res.render("errorPage", { title: "Error" });
  }
};
