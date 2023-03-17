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
  /*
  Explanation for function UCLocationOC():
  takes in the user selected city and the gallon requested and searches through the  UCCityPricesPerGallon list 
  searching for the city it requested, once found we create a new quote object 
  and set the gallon requested to the gallon property and set the price to the SetSugggestedPrice property
  then return the quote object to use on the functions.
   */
  UCLocationOC(CityDropDown, GallonsRequested,deliverDate) {
    for (let i = 0; i < this.UCCityPricesPerGallon.length; i++) {
      if (CityDropDown == this.UCCityPricesPerGallon[i].city) {
        var tempQ = new quotes();
        tempQ.SetGallon(GallonsRequested);
        tempQ.SetSugggestedPrice(this.UCCityPricesPerGallon[i].price);
        tempQ.setDelivaryDate(deliverDate);
        return tempQ;
      }
    }
  }

  //add a quote to the users account(enter object and store in a Linked List the new quote)
  /*
  Explanation for function UCClienQuoteManagement():
  takes in the user email the newly created Quote object and the user list(this can change when we get the database up and running)
  and searches through the user database list and then once we find the user email that we also 
  passed in we retrieve that users quote history list and push/add the latest quote object into the users UserHistory list  breaks out of the loop 
   */
  UCClienQuoteManagement(UCQuote, userEmail, UserDBLIst) {
    var UserDBLIst;
    for (let i = 0; i < UserDBLIst.length; i++) {
      if (userEmail == UserDBLIst[i].email) {
        ListOfUsers[i].UserHistory.push(UCQuote);
        break;
      }
    }
  }

  //displays quotes in a tabular display(this should return data in a format that the front end team can display anyway they like.
  /*
  Explanation for function UCClientHistory():
  takes in the user email and the user list(this can change when we get the database up and running)
  and searches through the user database list and then once we find the user email that we also 
  passed in we retrieve that users quote history list breaks out of the loop then we iterate over
  the users quote history and print them to the console(This can be a good way to get each property of the quote class and display 
  each of them with each quote) 
   */
  /**
   * 
   * @param {*} userEmail 
   * @param {*} UserDBLIst 
   */
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
  UCPricingTotal(userQuote) {
    const x = 0.1;
    let y = 1 - x;
    userQuote.totalQuote = (userQuote.gallon * userQuote.sugestedPrice) / y;
    return userQuote.totalQuote;
  }
}
module.exports = fuelQuoteModule;
