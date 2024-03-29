const { json } = require("body-parser");
const express = require("express");
const fuelQuoteModule = require("../../fuelQuoteModule.js");

const router = express.Router();
let User = require("../../user");

 

router.get("/", (req, res) => {
  res.send(res.json(User));

});
router.route("/:id")
    .get((req, res) => {


        const found = User.some(User => User.id === parseInt(req.params.id));

        if (found) {

            //res.json(User.filter(User => User.id === parseInt(req.params.id)));
            User.forEach(user => {

                if (user.id === parseInt(req.params.id)) {
                    res.render("quoteform", { add1: user.Adress1 });
                }

            });
        

        } else {

            res.sendStatus(400);

        }

    })
    .post((req, res) => {
        const found = User.some(User => User.id === parseInt(req.params.id));

        if (found) {

            User.forEach(user => {

                if (user.id === parseInt(req.params.id)) {
                    let gallonVal = req.body.gallons;
                    console.log(req.body);
                    let getDate = new Date(req.body.date);
                    let cityChossin = req.body.city;
                    let userAdress = user.Adress1;
                    let newActioin = new fuelQuoteModule();
                    let testQuote = newActioin.UCLocationOC(cityChossin, gallonVal, getDate, userAdress)
                    newActioin.UCPricingTotal(testQuote);
                    res.render("quoteform", { "add1": testQuote.UsersDelveryAddress, "totaldue": testQuote.totalQuote, "suggestprice": testQuote.sugestedPrice });
                    newActioin.UCClienQuoteManagement(testQuote, req.params.id, User);
                    console.log(User[0]);
                }

            });
        

        } else {

            res.sendStatus(400);

        }


//Update UserHistory
   });
   router.get("/:id/quotehist", (req, res) => {
    res.render("quotehist")
  
  });
 

module.exports = router