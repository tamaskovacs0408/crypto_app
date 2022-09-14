import React from "react";

export default function BTC({data}) {
  return (
    <div className="crypto_container">
      <div className="crypto_name">
        <h2>Bitcoin</h2>
        {/* <button>Current price</button> */}
      </div>
      <div className="crypto_price">
        <p>{parseFloat(data.lastPrice).toFixed(2)} $</p>
      </div>
    </div>
  );
}
