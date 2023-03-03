//Quotes object " we may need it for making the Quote history"

class quotes {
  gallon;
  date;
  UsersDelveryAddress;
  DelivaryDate;
  sugestedPrice;
  TotalAmount;
  currentDate() {
    this.date = new Date().toLocaleDateString;
  }
  GetAdress(UserAddress) {
    this.UsersDelveryAddress = UserAddress;
  }
  DelivaryDay() {
    DelivaryDate = new Date().toLocaleDateString;
  }
  getSugggestedPrice(price) {
    this.sugestedPrice = price;
  }
  grandTotal(val) {
    TotalAmount = this.gallon * this.sugestedPrice;
  }
}
module.exports = quotes;
