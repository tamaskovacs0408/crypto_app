import React from "react";

export default function ADA({data}) {
  return (
    <div className="crypto_container">
      <div className="crypto_name">
        <h2>Cardano</h2>
        {/* <button>Current price</button> */}
      </div>
      <div className="crypto_price">
        <p>{parseFloat(data.lastPrice).toFixed(3)} $</p>
      </div>
    </div>
  );
}
