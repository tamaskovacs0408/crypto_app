import React from "react";
import './style.css'

export default function BTC({data}) {
  return (
    <div className="crypto_container">
      <div className="crypto_name">
        <h2 className="BTC">Bitcoin</h2>
        {/* <button>Current price</button> */}
      </div>
      <div className="crypto_price">
        <p>{parseFloat(data.lastPrice).toFixed(2)} $</p>
        <p>{parseFloat(data.priceChangePercent).toFixed(1)} %</p>
      </div>
    </div>
  );
}
