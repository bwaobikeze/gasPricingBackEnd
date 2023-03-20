// const fuelQuoteModule = require("./fuelQuoteModule.js");
//const bodyParser = require("body-parser");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
const userRounter = require('./routes/api/users');
const userHistRounter = require('./routes/api/UserHist');
app.use(bodyParser.urlencoded({extended: true}))
app.use("/api/users", userRounter);
app.use("/api/UserHist", userHistRounter);

app.get("/", (req, res) => {
  res.render("quoteform");

})

// })
app.listen(5500);


