import React from "react";
import './style.css';

export default function ETH({data}) {
  return (
    <div className="crypto_container">
      <div className="crypto_name">
        <h2 className="ETH">Ethereum</h2>
        {/* <button>Current price</button> */}
      </div>
      <div className="crypto_price">
        <p>{parseFloat(data.lastPrice).toFixed(2)} $ </p>
        <p>{parseFloat(data.priceChangePercent).toFixed(1)} %</p>
      </div>
    </div>
  );
}
