const express = require("express");
let app = express();
const port = 8080;
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
    return;
  }
  console.log(`server started at port: ${port}`);
});
