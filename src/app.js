const createCart = require('./observer/observer');

const totalPrice = 100.0;
const cart = createCart(totalPrice);

cart.updateTotalPrice(120);

const totalPricePrinter = (totalPrice) => {
  console.log(`Total Price: ${totalPrice}`);
};

const totalPriceWithDiscountPrinter = (totalPrice) => {
  const discount = 10;
  console.log(`Total Price with discount: ${totalPrice - discount}`);
};

cart.register(totalPricePrinter);
cart.register(totalPriceWithDiscountPrinter);

cart.updateTotalPrice(135);

cart.unregister(totalPricePrinter);

cart.updateTotalPrice(150);
