const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

function refillsPpr() {
  var totalPrice = this.pricePerRefill * this.refills;
  if (this.subscription) {
    totalPrice = totalPrice * 0.75;
  }
  if (this.coupon) {
    totalPrice = totalPrice - 10;
  }
  return `Your grand total is ${totalPrice}.`;
}

timmy.refillsPpr = refillsPpr;
sarah.refillsPpr = refillsPpr;
rocky.refillsPpr = refillsPpr;

console.log(timmy.refillsPpr());
console.log(sarah.refillsPpr());
console.log(rocky.refillsPpr());
