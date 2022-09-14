import React from "react";

export default function Doge({data}) {
  return (
    <div className="crypto_container">
      <div className="crypto_name">
        <h2>Dogecoin</h2>
        <button>Current price</button>
      </div>
      <div className="crypto_price">
        <p>{parseFloat(data.lastPrice).toFixed(4)} $</p>
      </div>
    </div>
  );
}
