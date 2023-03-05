const fuelQuoteModule = require("./fuelQuoteModule.js");

const { Console } = require("console");

//testing out with test user objects
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
  },
];
var fulQ = new fuelQuoteModule();
let firstQuote = fulQ.UCLocationOC("Houston", 5);
console.log(firstQuote);
fulQ.UCClienQuoteManagement(firstQuote, "roesch@gmail.com", ListOfUsers);
console.log(ListOfUsers[1].UserHistory);
firstQuote = fulQ.UCLocationOC("SanAntonio", 5);
fulQ.UCClienQuoteManagement(firstQuote, "roesch@gmail.com", ListOfUsers);
//fulQ.UCClientHistory("roesch@gmail.com", ListOfUsers);
