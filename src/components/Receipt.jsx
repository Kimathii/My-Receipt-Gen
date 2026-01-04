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
  "Petco": "/logos/petco.png",
  "Target": "/logos/Target.jpg",
  "Chipotle Mexican Grill": "/logos/chipotle.png",
  "Burger King": "/logos/burger.png",
  "Subway": "/logos/subway.png",
  "KFC": "/logos/kfc.png",
  "McDonald's": "/logos/mcdonalds.png",
};

  return (
<div
  className={`receipt ${receipt.company === "Petco" ? "petco" : ""}`}
  onDoubleClick={handleGenerateNew}
>

      {/* LOGO GOES HERE */}
      <div className="logo-container">
  <img
  src={LOGO_MAP[receipt.company]}
  alt={`${receipt.company} logo`}
  className="receipt-logo"
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
  <p>
    <span>Subtotal:</span>
    <span className="amount">
      ${Number(receipt.subtotal).toFixed(2)}
    </span>
  </p>

  <p>
    <span>Tax:</span>
    <span className="amount">
      ${Number(receipt.tax).toFixed(2)}
    </span>
  </p>

  <p>
    <strong>TOTAL:</strong>
    <strong className="amount">
      ${Number(receipt.total).toFixed(2)}
    </strong>
  </p>
</div>



      <hr />

    <div className="payments">
  <p className="section-title"></p>

  {receipt.payments.card > 0 && (
    <>
      <p>CREDIT CARD AUTH ${receipt.payments.card.toFixed(2)}</p>
      <p>
        {receipt.cardType} •••• {receipt.cardLast4}
      </p>
      <p>{receipt.approvalText}</p>

      {/* Pick 0–2 of the lines below — depending on how "busy" you want it */}
      <p>AUTH# {receipt.authCode}</p>
      {/* <p>Ref: 00{receipt.cardLast4}</p> */}
      {/* <p>Terminal: T{receipt.orderNumber.slice(1)}</p> */}
    </>
  )}
</div>




<hr />


      <div className="barcode-container">
        <div className="barcode"></div>
        <div className="barcode-label">{receipt.orderNumber}</div>
      </div>

      <p className="thank-you">Thank you for your visit!</p>

      {/* <button onClick={handleGenerateNew}>
        Generate New Receipt
      </button> */}
    </div>
  );
};

export default Receipt;
