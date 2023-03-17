//Quotes object " we may need it for making the Quote history"

class quotes {
  gallon;
  date;
  UsersDelveryAddress;
  DelivaryDate;
  sugestedPrice;
  totalQuote;
  SetAdress(UserAddress) {
    this.UsersDelveryAddress = UserAddress;
  }
  GetAdress() {
    return this.UsersDelveryAddress;
  }
  setDelivaryDate(deliveryday) {
    this.DelivaryDate = deliveryday;
  }
  GetDelivaryDay() {
    return this.DelivaryDate
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
