import React from "react";
import './style.css';

export default function Doge({data}) {
  return (
    <div className="crypto_container">
      <div className="crypto_name">
        <h2 className="Doge">Dogecoin</h2>
        {/* <button>Current price</button> */}
      </div>
      <div className="crypto_price">
        <p>{parseFloat(data.lastPrice).toFixed(4)} $</p>
        <p>{parseFloat(data.priceChangePercent).toFixed(1)} %</p>
      </div>
    </div>
  );
}
