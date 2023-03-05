var User = require("./user.js");
const { Console } = require("console");
const quotes = require("./quotes");
class fuelQuoteModule {
  //3 City Price Per Gallon
  UCCityPricesPerGallon = [
    { city: "Houston", price: 2.99 },
    { city: "Auston", price: 6.99 },
    { city: "SanAntonio", price: 1.99 },
  ];
  //Takes the city input from the user and in theory return the current lowest PPG(price per gallon) returns PPG
  UCLocationOC(CityDropDown, GallonsRequested) {
    for (let i = 0; i < this.UCCityPricesPerGallon.length; i++) {
      if (CityDropDown == this.UCCityPricesPerGallon[i].city) {
        var tempQ = new quotes();
        tempQ.SetGallon(GallonsRequested);
        tempQ.SetSugggestedPrice(this.UCCityPricesPerGallon[i].price);
        return tempQ;
      }
    }
  }

  //add a quote to the users account(enter object and store in a Linked List the new quote)
  UCClienQuoteManagement(UCQuote, userEmail, UserDBLIst) {
    var UserDBLIst = [];
    for (let i = 0; i < UserDBLIst.length; i++) {
      if (userEmail == UserDBLIst[i].email) {
        ListOfUsers[i].UserHistory.push(UCQuote);
        break;
      }
    }
  }

  //displays quotes in a tabular display(this should return data in a format that the front end team can display anyway they like.
  UCClientHistory(userEmail, UserDBLIst) {
    var UserDBLIst = [];
    var returnedUser;
    for (let i = 0; i < ListOfUsers.length; i++) {
      if (userEmail == UserDBLIst[i].email) {
        returnedUser = UserDBLIst[i];
        break;
      }
    }
    returnedUser.UserHistory.forEach((element) => {
      Console.log(element);
    });
  }

  //what profit margin we want calculate the quote for the user
  UCPricingMargin() {}
}
module.exports = fuelQuoteModule;
