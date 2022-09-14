import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "react-uuid";
import { COIN_API } from "../API";
import BTC from "../BTC/BTC";
import ETH from "../ETH/ETH";
import BNB from "../BNB/BNB";
import ADA from "../ADA/ADA";
import AVAX from "../AVAX/AVAX";
import Doge from "../Doge/Doge";
import SOL from "../SOL/SOL";

export default function MainMenu() {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
        .get(`${COIN_API}`)
        .then((res) => setCoinData(res.data))
        .catch((err) => console.log(err));

    const interval = setInterval(() => {
      axios
        .get(`${COIN_API}`)
        .then((res) => setCoinData(res.data))
        .catch((err) => console.log(err));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main_menu_container">
      {coinData
        .filter((coin) => coin.symbol === "BTCUSDT")
        .map((data) => {
          return <BTC key={uuid()} data={data} />;
        })}
      {coinData
        .filter((coin) => coin.symbol === "ETHUSDT")
        .map((data) => {
          return <ETH key={uuid()} data={data} />;
        })}
      {coinData
        .filter((coin) => coin.symbol === "BNBUSDT")
        .map((data) => {
          return <BNB key={uuid()} data={data} />;
        })}
      {coinData
        .filter((coin) => coin.symbol === "ADAUSDT")
        .map((data) => {
          return <ADA key={uuid()} data={data} />;
        })}
      {coinData
        .filter((coin) => coin.symbol === "AVAXUSDT")
        .map((data) => {
          return <AVAX key={uuid()} data={data} />;
        })}
      {coinData
        .filter((coin) => coin.symbol === "DOGEUSDT")
        .map((data) => {
          return <Doge key={uuid()} data={data} />;
        })}
      {coinData
        .filter((coin) => coin.symbol === "SOLUSDT")
        .map((data) => {
          return <SOL key={uuid()} data={data} />;
        })}
    </div>
  );
}
