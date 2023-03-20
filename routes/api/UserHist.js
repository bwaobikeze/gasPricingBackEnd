const express = require("express");
const fuelQuoteModule = require("../../fuelQuoteModule.js");

const router = express.Router();
let User = require("../../user");

router.get("/", (req, res) => {
    res.render("quotehist");
  
});
  
module.exports = router