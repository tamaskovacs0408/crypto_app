import React from "react";
import "./index.scss";

export default function Global({marketCap, btcDom, crypNum}) {
  let mc = marketCap?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") || marketCap;
  let num = crypNum?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") || crypNum;

  return (
    <>
    <h2 className="global_title">Global data</h2>
    <div className="globaldata_container">
      <div className="gdatas">
        <h3>Market Cap</h3>
        <p>{mc}$</p>
      </div>
      <div className="gdatas">
        <h3>Bitcoin Dominance</h3>
        <p>{btcDom}%</p>
      </div>
      <div className="gdatas">
        <h3>Active Cryptocurrencies</h3>
        <p>{num} pc.</p>
      </div>
    </div>
    </>
  );
}
