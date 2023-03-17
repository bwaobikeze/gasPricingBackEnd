const fuelQuoteModule = require("./fuelQuoteModule.js");
//const bodyParser = require("body-parser");
ListOfUsers = [
  {
    email: "notaprguy@msn.com",
    Fullname: "Bob Igar",
    Age: 19,
    Adress1: "8352 Redwood St",
    Adress2: "",
    City: "Plano",
    State: "TX",
    Zipcode: "75074",
    UserHistory: [],
  },
  {
    email: "roesch@gmail.com",
    name: "Rose Wild",
    Age: 19,
    Adress1: "11 Illinois Dr",
    Adress2: "",
    City: "Fort Worth",
    State: "TX",
    Zipcode: "76116",
    UserHistory: [],
  },
];
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.render("quoteform");

})
app.post("/app.js", (req, res) => {
  let testcity = "Houston";

  let gallonVal = req.body.gallons;
  req.body.Date = new Date();
  let cityChossin = req.body.City;
  let newActioin = new fuelQuoteModule();
  //let testQuote=newActioin.UCLocationOC(testcity,gallonVal,req.body.Date)

  console.log(gallonVal);
  console.log(req.body.Date);
  console.log(cityChossin);
})
app.listen(5500);


