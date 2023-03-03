//var fuelQuoteModule = require("./fuelQuoteModules");

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
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
//simulating logging in
readline.question("Please Provide Email: ", (userEmail) => {
  let returnedUser;
  for (let i = 0; i < ListOfUsers.length; i++) {
    if (userEmail == ListOfUsers[i].email) {
      returnedUser = ListOfUsers[i];
      break;
    }
  }
  console.log(returnedUser);

  readline.close();
});
