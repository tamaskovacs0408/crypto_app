import React from "react";
import "./index.scss";

export default function Global({marketCap, btcDom, crypNum}) {
  // let mc = marketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  // let num = crypNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");


  return (
    <div className="globaldata_container">
      <div className="gdatas">
        <h3>Market Cap</h3>
        <p>{marketCap}$</p>
      </div>
      <div className="gdatas">
        <h3>Bitcoin Dominance</h3>
        {btcDom}%
      </div>
      <div className="gdatas">
        <h3>Active Cryptocurrencies</h3>
        <p>{crypNum}</p>
      </div>
    </div>
  );
}
