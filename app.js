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

// })
app.listen(5500);


