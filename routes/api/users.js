const { json } = require("body-parser");
const express = require("express");
const fuelQuoteModule = require("../../fuelQuoteModule.js");

const router = express.Router();

//const uuid = require("uuid");

let User = require("../../user");

 

router.get("/", (req, res) => {
  res.send(res.json(User));

});
router.route("/:id").get((req, res) => {


    const found = User.some(User => User.id === parseInt(req.params.id));

    if (found) {

        //res.json(User.filter(User => User.id === parseInt(req.params.id)));
            User.forEach(user => {

      if (user.id === parseInt(req.params.id)) {
        res.render("quoteform",{add1:user.Adress1});
      }

    });
        

    } else {

        res.sendStatus(400);

    }

})
    .post((req, res) => {
    console.log(req.params.id);
    let gallonVal = req.body.gallons;
    let getDate = req.body.Date = new Date();
    let cityChossin = req.body.city;
    let userAdress = req.body.address;
     let newActioin = new fuelQuoteModule();
    let testQuote = newActioin.UCLocationOC(cityChossin, gallonVal, getDate,userAdress)
    newActioin.UCPricingTotal(testQuote);
    res.render("quoteform",{"add1":testQuote.UsersDelveryAddress,"totaldue":testQuote.totalQuote,"suggestprice":testQuote.sugestedPrice});
    console.log(testQuote);
  })
// router.param("id", (req, res, next, id) => {
//     req.user = User[id];
// })

//Update User

// router.put("/:id", (req, res) => {

//   const found = Users.some(User => User.id === parseInt(req.params.id));

//   if (found) {

//     const updateUser = req.body;

//     users.forEach(user => {

//       if (User.id === parseInt(req.params.id)) {

//         User.Fullname = updateUser.Fullname ? updateUser.Fullname : user.Fullname;

//         User.email = updateUser.email ? updateUser.email : user.email;

//         res.json({ msg: "User updated", user });

//       }

//     });

//   } else {

//     res.sendStatus(400);

//   }

// });

 

module.exports = router