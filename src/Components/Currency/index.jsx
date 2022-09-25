import React, { useState, useEffect } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import "./index.scss";
import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

export default function Currency({ id,  data }) {
  let priceChange = data.quotes.USD.percent_change_24h;
  let athDate = data.quotes.USD.ath_date.split("T")[0];
  const [favourites, setFavourites] = useState([])

  return (
    <div className="accordion_container">
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="crypto_container">
                <div className="crypto_name">
                  <span>{data.rank}</span>
                  <h2>{data.name}</h2>
                  <p>{data.symbol}</p>
                  <IoHeart className="fav_icon"/>
                  <IoHeartOutline className="fav_icon"/>
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
            <div className="data_container">
              <div className="datas">
                <p>Market cap: {data.quotes.USD.market_cap}</p>
                <p>Circulating supply: {data.circulating_supply}</p>
                <p>All Time High price: {data.quotes.USD.ath_price}</p>
                <p>All Time High price date: {athDate}</p>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
