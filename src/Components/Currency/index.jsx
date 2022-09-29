import React, { useState, useEffect } from "react";
// import { IoHeart, IoHeartOutline } from "react-icons/io5";
import "./index.scss";
import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

export default function Currency({ id, data }) {
  let priceChange = data.quotes.USD.percent_change_24h;
  let athDate = data.quotes.USD.ath_date.split("T")[0];
  athDate = athDate.replace(/-/g, '.');
  let marcetCap = data.quotes.USD.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  let supply = data.circulating_supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  let currentPrice = parseFloat(data.quotes.USD.price).toFixed(2);
  currentPrice = currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  let athPrice = parseFloat(data.quotes.USD.ath_price).toFixed(2);
  athPrice = athPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");


  return (
    <div className="accordion_container">
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="crypto_container">
                <div className="crypto_name">
                  <h2>{data.name}</h2>
                  <p>{data.symbol}</p>
                </div>
                <div className="crypto_price">
                  <p>{currentPrice}$</p>
                  <p style={{ color: priceChange < 0 ? "red" : "#169c11" }}>
                    {parseFloat(priceChange).toFixed(1)} %
                  </p>
                </div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="data_container">
              <div className="data_inner_container">
                <div className="datas">
                  <h3>Market Cap:</h3>
                  <p>{marcetCap}$</p>
                </div>
                <div className="datas">
                  <h3>Circulating Supply:</h3>
                  <p>{supply}$</p>
                </div>
                <div className="datas">
                  {" "}
                  <h3>All Time High Price: </h3>
                  <p>{athPrice}$</p>
                </div>
                <div className="datas">
                  <h3>All Time High Price Date: </h3>
                  <p>{athDate}</p>
                </div>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
