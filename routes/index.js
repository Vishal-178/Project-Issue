const express = require("express");
const router = express.Router();
// importing controllers
const homeController = require("../controllers/home_controller");
const create = require("../controllers/create_controller");
const createProject = require("../controllers/createProject_controller");
const createIssue = require("../controllers/createIssue_controller");
const projectDetail = require("../controllers/projectDetail_controller");
const deleteController = require("../controllers/delete_Controller");

console.log("router loaded home controller");
router.get("/", homeController.home);
router.get("/create-project", create.createProject);
router.get("/create-issue", create.createIssue);

// when button click these two help to create new issue and project and
// add it to the database.
router.post("/createNewProject", createProject.project);
// to new issue when form in issue-page is submitted
router.post("/createNewIssue/", createIssue.issue);

// detail page when click on any project on home the this will called
router.get("/detailpage/", projectDetail.detail);

router.get("/filter/", projectDetail.detail);

// delete project
router.get("/deleteProject/", deleteController.project);

// delete issues
router.get("/deleteIssue/", deleteController.issue);

//error page
router.get("/error", (req, res) => {
  return res.render("errorPage", { title: "Error" });
});
module.exports = router;
