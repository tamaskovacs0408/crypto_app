import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "react-uuid";
import { COIN_API } from "../API";
import { COIN_DATA_API } from "../API";
import BTC from "../BTC/BTC";
import ETH from "../ETH/ETH";
import BNB from "../BNB/BNB";
import ADA from "../ADA/ADA";
import AVAX from "../AVAX/AVAX";
import Doge from "../Doge/Doge";
import SOL from "../SOL/SOL";

export default function MainMenu() {
  const [coinData, setCoinData] = useState([]);
  const [coinInfo, setCoinInfo] = useState([]);

  useEffect(() => {
    // axios
    //   .get(`${COIN_DATA_API}`)
    //   .then((res) => setCoinInfo(res.data))
    //   .catch((err) => console.log(err));


    axios
        .get(`${COIN_API}`)
        .then((res) => setCoinData(res.data))
        .catch((err) => console.log(err));

    // const interval = setInterval(() => {
    //   axios
    //     .get(`${COIN_API}`)
    //     .then((res) => setCoinData(res.data))
    //     .catch((err) => console.log(err));
    // }, 20000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="main_menu_container">
      {coinData
        .filter((coin) => coin.id === "btc-bitcoin")
        .map((data) => {
          return <BTC key={uuid()} data={data} />;
        })}
      {coinData
        .filter((coin) => coin.id === "eth-ethereum")
        .map((data) => {
          return <ETH key={uuid()} data={data} />;
        })}
      {coinData
        .filter((coin) => coin.id === "bnb-binance-coin")
        .map((data) => {
          return <BNB key={uuid()} data={data} />;
        })}
      {coinData
        .filter((coin) => coin.id === "ada-cardano")
        .map((data) => {
          return <ADA key={uuid()} data={data} />;
        })}
      {coinData
        .filter((coin) => coin.id === "avax-avalanche")
        .map((data) => {
          return <AVAX key={uuid()} data={data} />;
        })}
      {coinData
        .filter((coin) => coin.id === "doge-dogecoin")
        .map((data) => {
          return <Doge key={uuid()} data={data} />;
        })}
      {coinData
        .filter((coin) => coin.id === "sol-solana")
        .map((data) => {
          return <SOL key={uuid()} data={data} />;
        })}
    </div>
  );
}
