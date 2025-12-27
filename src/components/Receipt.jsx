import { useState } from "react";
import generateReceipt from "../utils/generateReceipt";
import "../styles/receipt.css";

const Receipt = () => {
  const [receipt, setReceipt] = useState(generateReceipt());

  const handleGenerateNew = () => {
    setReceipt(generateReceipt());
  };

const LOGO_MAP = {
  "Eukanuba Pet Food": "/logos/ekunaba.png",
  "Pure Encapsulations": "/logos/pure.png",
  "Bacardi Ocho": "/logos/bacardi.png",
  "Tractor Supply Co": "/logos/tractor.png",
  "The Vitamin Shoppe": "/logos/vitamin.png",
  "Amazon": "/logos/amazon.png",
  "Sam's Club": "/logos/sams.png",
  "Petco": "/logos/petco.png"
};

  return (
    <div className="receipt">

      {/* LOGO GOES HERE */}
      <div className="logo-container">
  <img
    src={LOGO_MAP[receipt.company]}
    alt={`${receipt.company} logo`}
    className="company-logo"
  />
</div>

      {/* <h1>{receipt.company}</h1> */}
      <p className="slogan">{receipt.slogan}</p>

      <p className="center">{receipt.address}</p>
      <p className="center">{receipt.phone}</p>

      <hr />

      <div className="meta">
        <p>Order: {receipt.orderNumber}</p>
        <p>Date: {receipt.date}</p>
      </div>

      <hr />

      <ul>
        {receipt.items.map((item, index) => (
          <li key={index}>
            <span>
              {item.quantity}x {item.name}
            </span>
            <span>${item.total.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <hr />

      <div className="totals">
        <p>Subtotal: ${receipt.subtotal}</p>
        <p>
          <strong>Total: ${receipt.total}</strong>
        </p>
      </div>

      <hr />

      <div className="barcode-container">
        <div className="barcode"></div>
        <div className="barcode-label">{receipt.orderNumber}</div>
      </div>

      <p className="thank-you">Thank you for your visit!</p>

      <button onClick={handleGenerateNew}>
        Generate New Receipt
      </button>
    </div>
  );
};

export default Receipt;
