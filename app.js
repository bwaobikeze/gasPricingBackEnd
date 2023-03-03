//var fuelQuoteModule = require("./fuelQuoteModules");
//testing out with test user objects
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
ListOfUsers = [
  { name: "bob", Age: 19, Adress: "8352 Redwood St Plano TX 75074" },
  { name: "Brian", Age: 19, Adress: "11 Illinois Dr Fort Worth TX 76116" },
];
console.log(ListOfUsers);
readline.question("Pick 0 or 1 test user: ", (UserChoice) => {
  if (UserChoice == 0) {
    console.log(ListOfUsers[UserChoice]);
  } else {
    console.log(ListOfUsers[UserChoice]);
  }
  readline.close();
});
