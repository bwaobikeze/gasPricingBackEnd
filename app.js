const fuelQuoteModule = require("./fuelQuoteModule.js");
//const bodyParser = require("body-parser");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.render("quoteform");

})
app.post("/app.js", (req, res) => {
  let gallonVal = req.body.gallons;
  console.log(gallonVal);
})
app.listen(5500);


