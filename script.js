class Hamburger {
  constructor(size, staffing) {
    this.size = size;
    this.staffing = staffing;
    console.log(`Size: kkacal: ${size.kkl} and price: ${size.price}`)
    console.log(
        `Staffing: kkacal: ${staffing.kkl} and price: ${staffing.price}`)

    this.sumKKL = 0;
    this.sumPrice = 0;
    this.topping = [];
  }

  addTopping(option) {
    console.log(
        `+ one more more topping: kkacal: ${option.kkl} and price: ${option.price}`)
    this.topping.push(option);
  }

  calculateKilocalories() {

    let a = [];
    let sum = 0;
    a = Object.values(this);
    a = a.flat();
    a.map(function (item) {
      Object.keys(item).map(function (value) {
        if (value === 'kkl') {
          sum = sum + item[value];
        }
      })

    })
    this.sumKKL = sum;
    console.log(`All kilocalories:  ${this.sumKKL}`)
  }

  calculatePrice() {
    let a = [];
    let sum = 0;
    a = Object.values(this);
    a = a.flat();
    a.map(function (item) {
      Object.keys(item).map(function (value) {
        if (value === 'price') {
          sum = sum + item[value];
        }
      })

    })
    this.sumPrice = sum;
    console.log(`Price:  ${this.sumPrice}`)
  }

  static SIZE = {
    SMALL: {price: 50, kkl: 20},
    BIG: {price: 100, kkl: 40},
  }
  static STAFFING = {
    STUFFING_CHEESE: {price: 10, kkl: 20},
    STUFFING_SALAD: {price: 20, kkl: 5},
    STUFFING_POTATO: {price: 15, kkl: 10},
  }
  static TOPPING = {
    PRIPRAVA: {price: 15, kkl: 0},
    MAYO: {price: 20, kkl: 5},
  }
}

hamb = new Hamburger(Hamburger.SIZE.SMALL, Hamburger.STAFFING.STUFFING_CHEESE);
hamb.addTopping(Hamburger.TOPPING.MAYO);
hamb.calculateKilocalories();
hamb.calculatePrice()
hamb.addTopping(Hamburger.TOPPING.PRIPRAVA);
hamb.calculateKilocalories();
hamb.calculatePrice();
console.log(hamb);

hambBig = new Hamburger(Hamburger.SIZE.BIG, Hamburger.STAFFING.STUFFING_POTATO);
hambBig.addTopping(Hamburger.TOPPING.MAYO);
hambBig.calculateKilocalories();
hambBig.calculatePrice()
hambBig.addTopping(Hamburger.TOPPING.PRIPRAVA);
hambBig.calculateKilocalories();
hambBig.calculatePrice();
console.log(hambBig);

