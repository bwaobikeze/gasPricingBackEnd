const fuelQuoteModule = require("./fuelQuoteModule.js");
//const bodyParser = require("body-parser");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
const userRounter = require('./routes/api/users');
app.use(bodyParser.urlencoded({extended: true}))
app.use("/api/users", userRounter);
app.get("/", (req, res) => {
  res.render("quoteform");

})
app.post("/app.js", (req, res) => {
  let testcity = "Houston";

  let gallonVal = req.body.gallons;
  let getDate = req.body.Date = new Date();
  let savedate=getDate.toString
  
  let cityChossin = req.body.City;
  let newActioin = new fuelQuoteModule();
  //let testQuote=newActioin.UCLocationOC(testcity,gallonVal,req.body.Date)

  console.log(gallonVal);
  console.log(savedate);
  console.log(cityChossin);
})
app.listen(5500);


