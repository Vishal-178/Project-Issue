const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const env = require("./config/environment");
const logger = require("morgan");
const bodyParser = require("body-parser");
const db = require("./config/mongoose");
const cookieParser = require("cookie-parser");
let app = express();
require("./config/view-helper")(app);
const port = env.PORT;
//body parser to parse the post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cookie parser to get and set cookie
// app.use(express.urlencoded);
app.use(cookieParser());
app.use(express.static("public/assets"));
app.use(express.static("assets"));
// setting up views layouts
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.use(logger(env.morgan.mode, env.morgan.option));
app.use(expressLayouts);
//setting up views
app.set("view engine", "ejs");
app.set("views", "./views");

//using express route and setup routes
app.use("/", require("./routes/index"));
app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
    return;
  }
  console.log(`server started at port: ${port}`);
});
