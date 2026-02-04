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

  // move clock back 2 hours
  d.setHours(d.getHours() - 2);

  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();

  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = String(hours).padStart(2, "0");

  return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
};




// ---------------- GENERATE ITEMS ----------------
const generateItems = (products, companyName) => {
  // Special case for Sam's Club: always show all products, one of each, no item number
  if (companyName === "Sam's Club") {
    return products.map((product) => {
      const price = product.price; // Use exact price for memberships
      return {
        itemNumber: null, // No item number for Sam's Club
        name: product.name,
        quantity: 1,
        price,
        total: price
      };
    });
  }

  // Special case for Petco
  if (companyName === "Petco") {
    const items = [];

    // Check if this is Royal Canin Petco or Cesar Petco
    const isRoyalCanin = products.some(p => p.name.includes("Royal Canin"));

    if (isRoyalCanin) {
      // Royal Canin Petco: 1 probiotic + 1 pouch + 1 dry food
      const probioticProducts = products.filter(p => p.name.includes("Probiotics"));
      const pouchProducts = products.filter(p => p.name.includes("Pouch"));
      const dryProducts = products.filter(p => p.name.includes("Dry Dog Food"));

      // Pick 1 random probiotic
      if (probioticProducts.length > 0) {
        const product = getRandomItem(probioticProducts);
        const quantity = getRandomInt(2, 3);
        const price = priceWithVariance(product.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }

      // Pick 1 random pouch
      if (pouchProducts.length > 0) {
        const product = getRandomItem(pouchProducts);
        const quantity = getRandomInt(2, 3);
        const price = priceWithVariance(product.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }

      // Pick 1 random dry food
      if (dryProducts.length > 0) {
        const product = getRandomItem(dryProducts);
        const quantity = getRandomInt(2, 3);
        const price = priceWithVariance(product.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }
    } else {
      // Cesar Petco: 1 bowl product + 2 different 3.5 oz (12 Count Multipack) products
      const bowlProducts = products.filter(p =>
        (p.name.includes("Bowls") || p.name.includes("Meals")) &&
        !p.name.includes("Multipack") &&
        !p.name.includes("Variety Pack")
      );

      const twelveCountProducts = products.filter(p =>
        p.name.includes("3.5 oz (12 Count Multipack)")
      );

      // Pick 1 random bowl product
      if (bowlProducts.length > 0) {
        const bowl = getRandomItem(bowlProducts);
        const quantity = getRandomInt(2, 3);
        const price = priceWithVariance(bowl.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: bowl.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }

      // Pick 2 different random 12-count products
      if (twelveCountProducts.length >= 2) {
        const shuffled = [...twelveCountProducts].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, 2);

        for (const product of selected) {
          const quantity = getRandomInt(2, 3);
          const price = priceWithVariance(product.price);
          items.push({
            itemNumber: getRandomInt(10000000, 99999999),
            name: product.name,
            quantity,
            price,
            total: +(price * quantity).toFixed(2)
          });
        }
      }
    }

    return items;
  }

  // Default behavior for other companies
  const itemCount = 3;
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

  const items = generateItems(brand.products || [], brand.name);

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