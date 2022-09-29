import React, { useState, useEffect } from "react";
import { GLOBAL_DATA_API } from "../API";
import Global from "./Global";
import MenuNav from "../MenuNav";

export default function GlobalData() {
  const [gData, setgData] = useState([]);

  useEffect(() => {
    fetch(GLOBAL_DATA_API)
      .then(res => res.json())
      .then(data => setgData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <MenuNav />
      <>
        <Global
          marketCap={gData.market_cap_usd}
          btcDom={gData.bitcoin_dominance_percentage}
          crypNum={gData.cryptocurrencies_number}
        />
      </>
    </>
  );
}
