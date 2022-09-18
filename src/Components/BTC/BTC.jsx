import React from "react";
import "./style.css";
import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

export default function BTC({ data }) {
  let priceChange = data.quotes.USD.volume_24h_change_24h;

  return (
    <div className="accordion_container">
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="crypto_container">
                <div className="crypto_name">
                  <h2 className="BTC">{data.name}</h2>
                </div>
                <div className="crypto_price">
                  <p>{parseFloat(data.quotes.USD.price).toFixed(2)} $</p>
                  <p style={{ color: priceChange < 0 ? "red" : "#169c11" }}>
                    {parseFloat(priceChange).toFixed(1)} %
                  </p>
                </div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="more_information_container">
              <div className="volume">
                <p>Volume: {data.volume}</p>
                <p>Market cap: {data.max_supply}</p>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
