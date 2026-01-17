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
const formatDate = () => {
  const d = new Date();

  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();

  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // 12 instead of 0
  hours = String(hours).padStart(2, "0");

  return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
};



// ---------------- GENERATE ITEMS ----------------
const generateItems = (products) => {
  const itemCount = getRandomInt(1, 3);
  const items = [];

  for (let i = 0; i < itemCount; i++) {
    const product = getRandomItem(products);
    const quantity = getRandomInt(1, 3);
    const price = priceWithVariance(product.price);

    const itemNumber = getRandomInt(10000000, 99999999);

    items.push({
      itemNumber,
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

  const store = brand.store || getRandomItem(brand.stores || []);
  const location = getRandomItem(brand.locations || []);

  const items = generateItems(brand.products || []);

  const subtotal = +items.reduce((sum, item) => sum + item.total, 0).toFixed(2);

  const taxRate = STATE_TAX[location.state] || 0.06;
  const tax = +(subtotal * taxRate).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  // Always digital card payment
  const card = total;

  // Random card details
  const cardBrands = ["VISA", "MASTERCARD", "AMERICAN EXPRESS", "DISCOVER"];
  const cardType = getRandomItem(cardBrands);
  const cardLast4 = getRandomInt(1000, 9999);

  // Random approval text
  const approvalPhrases = [
    "EMV Chip | Approved",
    "Chip | Approved",
    "EMV Contact | Approved",
    "Contactless | Approved",
    "EMV Chip-Offline | Approved",
    "Approved - EMV",
  ];
  const approvalText = getRandomItem(approvalPhrases);

  // Random authorization code
  const authCode = (() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const prefix = getRandomItem(["A", "T", "X", "P", ""]);
    return prefix + getRandomInt(10000, 99999) + getRandomItem(letters);
  })();

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
    total,
    payments: {
      card,
      cash: 0,
      other: 0
    },
    cardType,
    cardLast4,
    approvalText,
    authCode
  };
};

export default generateReceipt;