import React from "react";
import './style.css';

export default function Doge({data}) {
  let priceChange = data.priceChangePercent;

  return (
    <div className="crypto_container">
      <div className="crypto_name">
        <h2 className="Doge">Dogecoin</h2>
        {/* <button>Current price</button> */}
      </div>
      <div className="crypto_price">
        <p>{parseFloat(data.lastPrice).toFixed(4)} $</p>
        <p style={{color: (priceChange < 0) ? 'red' : '#169c11'}}>{parseFloat(priceChange).toFixed(1)} %</p>
      </div>
    </div>
  );
}
