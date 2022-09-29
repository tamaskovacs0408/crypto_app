import React, { useState, useEffect } from "react";
import axios from "axios";
import { GLOBAL_DATA_API } from "../API";
import Global from "./Global";
import MenuNav from "../MenuNav";

export default function GlobalData() {
  const [gData, setgData] = useState([]);

  useEffect(() => {
    axios
      .get(GLOBAL_DATA_API)
      .then((res) => setgData(res.data))
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
