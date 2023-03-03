var User = require("./user.js");
var quote = require("./quotes");
class fuelQuoteModule {
  differntquotes = { Houston: 2.99, Auston: 6.99, "san antonio": 1.99 };
  //Takes the city input from the user and in theory return the current lowest PPG(price per gallon) returns PPG
  UCLocationOC(gallonsRequested, CityDropDown, UserEmail) {}

  //add a quote to the users account(enter object and store in a Linked List the new quote)
  UCClienQuoteManagement() {}

  //displays quotes in a tabular display(this should return data in a format that the front end team can display anyway they like.
  UCClientHistory() {}

  //what profit margin we want calculate the quote for the user
  UCPricingMargin() {}
}
module.exports = fuelQuoteModule;
