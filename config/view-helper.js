const env = require("./environment");
const fs = require("fs");
const path = require("path");
const { home } = require("../controllers/home_controller");
module.exports = (app) => {
  console.log("here");
  app.locals.assetPath = (filePath) => {
    console.log("----<=> ", filePath);
    if (env.name === "development") {
      return filePath;
    }
    const a = JSON.parse(
      fs.readFileSync(
        path.join(__dirname, "../public/assets/rev-manifest.json")
      )
    )[filePath];
    console.log("---->>>  ", a);
    return `/${a}`;
  };
};
