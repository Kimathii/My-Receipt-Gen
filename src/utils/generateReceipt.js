// utils/generateReceipt.js
import companies from "../data/companies";

// State tax rates
const STATE_TAX = {
  KY: 0.06,
  IL: 0.0625,
  NY: 0.04,
  WA: 0.065,
  FL: 0.06,
  CT: 0.0635,
  TX: 0.0625,
  MI: 0.06,
  CA: 0.0725,
  OH: 0.0575,
  GA: 0.04,
  MA: 0.0625
};

// ---------------- HELPERS ----------------
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const priceWithVariance = (price) => +(price + (Math.random() * 4 - 2)).toFixed(2);

const generateOrderNumber = () => `#${getRandomInt(10000, 99999)}`;
const formatDate = () => new Date().toLocaleString();

// ---------------- GENERATE ITEMS ----------------
const generateItems = (products) => {
  const itemCount = getRandomInt(1, 3);
  const items = [];

  for (let i = 0; i < itemCount; i++) {
    const product = getRandomItem(products);
    const quantity = getRandomInt(1, 3);
    const price = priceWithVariance(product.price);

    items.push({
      name: product.name,
      quantity,
      price,
      total: +(price * quantity).toFixed(2)
    });
  }

  return items;
};

// ---------------- GENERATE RECEIPT ----------------
const generateReceipt = () => {
  const brand = getRandomItem(companies);

  // Bacardi Ocho: pick random store type if store undefined
  const store = brand.store || getRandomItem(brand.stores);
  const location = getRandomItem(brand.locations);

  const items = generateItems(brand.products);
  const subtotal = +items.reduce((sum, item) => sum + item.total, 0).toFixed(2);

  const taxRate = STATE_TAX[location.state] || 0.06;
  const tax = +(subtotal * taxRate).toFixed(2);

  return {
    company: brand.name,
    slogan: brand.slogan,
    store,
    phone: brand.phone || "",
    address: location.address,
    orderNumber: generateOrderNumber(),
    date: formatDate(),
    items,
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    total: +(subtotal + tax).toFixed(2)
  };
};

export default generateReceipt;
