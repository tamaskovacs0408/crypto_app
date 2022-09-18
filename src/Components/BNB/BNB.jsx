import React from "react";
import './style.css';
import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

export default function BNB({data}) {
  let priceChange = data.priceChangePercent;

  return (
    <div className="crypto_container">
      <div className="crypto_name">
        <h2 className="BNB">BNB</h2>
        {/* <button>Current price</button> */}
      </div>
      <div className="crypto_price">
        <p>{parseFloat(data.lastPrice).toFixed(2)} $</p>
        <p style={{color: (priceChange < 0) ? 'red' : '#169c11'}}>{parseFloat(priceChange).toFixed(1)} %</p>
      </div>
    </div>
  );
}
