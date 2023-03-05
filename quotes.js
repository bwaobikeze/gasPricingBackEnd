//Quotes object " we may need it for making the Quote history"

class quotes {
  gallon;
  date;
  UsersDelveryAddress;
  DelivaryDate;
  sugestedPrice;
  TotalAmount;
  GetcurrentDate() {
    return new Date().toLocaleDateString;
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
  //   SetTotal(val) {
  //     TotalAmount = this.gallon * this.sugestedPrice;
  //   }
  //   GetTotal() {
  //     return this.TotalAmount;
  //   }
}
module.exports = quotes;
