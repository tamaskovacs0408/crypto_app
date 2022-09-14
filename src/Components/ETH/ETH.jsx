import React from "react";

export default function ETH({data}) {
  return (
    <div className="crypto_container">
      <div className="crypto_name">
        <h2>Ethereum</h2>
        <button>Current price</button>
      </div>
      <div className="crypto_price">
        <p>{data.lastPrice}</p>
      </div>
    </div>
  );
}
