//Quotes object " we may need it for making the Quote history"

class quotes {
  gallon;
  date;
  UsersDelveryAddress;
  DelivaryDate;
  sugestedPrice;
  totalQuote;
  SetcurrentDate() {
    //this.date=Date().;
  }
  GetcurrentDate() {
    return this.date;
  }
  SetAdress(UserAddress) {
    this.UsersDelveryAddress = UserAddress;
  }
  GetAdress() {
    return this.UsersDelveryAddress;
  }
  GetDelivaryDay() {
    this.DelivaryDate = this.GetcurrentDate();
  }
  SetSugggestedPrice(price) {
    this.sugestedPrice = price;
  }
  GetSugggestedPrice() {
    return this.sugestedPrice;
  }
  SetGallon(Gallon) {
    this.gallon = Gallon;
  }
}
module.exports = quotes;
