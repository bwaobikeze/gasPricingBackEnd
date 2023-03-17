const { json } = require("body-parser");
const express = require("express");

const router = express.Router();

const uuid = require("uuid");

let User = require("../../user");

 

router.get("/", (req, res) => {
  res.send(res.json(User));

});

router.get("/:id",(req, res)=> {
    res.status(400).json(User);
})

 

// router.get("/:id", (req, res) => {
//     //res.send(res.json(users));

// //   const found = users.some(user => user.id === parseInt(req.params.id));

 

// //   if (found) {

// //     res.json(users.filter(user => user.id === parseInt(req.params.id)));

// //   } else {

// //     res.sendStatus(400);

// //   }

// });
// router.post("/:id", (req, res) => {
//     console.log(res.json(users));
// })



//Update User

// router.put("/:id", (req, res) => {

//   const found = users.some(user => user.id === parseInt(req.params.id));

//   if (found) {

//     const updateUser = req.body;

//     users.forEach(user => {

//       if (user.id === parseInt(req.params.id)) {

//         user.Fullname = updateUser.Fullname ? updateUser.Fullname : user.Fullname;

//         user.email = updateUser.email ? updateUser.email : user.email;

//         res.json({ msg: "User updated", user });

//       }

//     });

//   } else {

//     res.sendStatus(400);

//   }

// });

 

module.exports = router