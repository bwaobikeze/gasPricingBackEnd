// const fuelQuoteModule = require("./fuelQuoteModule.js");
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
  //res.sendFile("/api/users"+"quoteform");

})
// app.post("/app.js", (req, res) => {
//   // let testcity = "Houston";


  
// //   // let cityChossin = req.body.City;
// //   // let newActioin = new fuelQuoteModule();
// //   // //let testQuote=newActioin.UCLocationOC(testcity,gallonVal,req.body.Date)

//     // console.log(gallonVal);
//     // console.log(savedate);
//     // console.log(cityChossin);
//     // console.log(req.person);
// })
app.listen(5500);


