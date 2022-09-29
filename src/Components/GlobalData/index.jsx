import React, { useState, useEffect } from "react";
import "./index.scss";
import { GLOBAL_DATA_API } from "../API";

export default function GlobalData() {
  const [gData, setgData] = useState([]);

  useEffect(() => {
    fetch(GLOBAL_DATA_API)
      .then((response) => response.json())
      .then((data) => setgData(data))
      .catch((err) => console.log(err));
  }, []);

  return <div>
    <p>{gData.market_cap_usd}</p>
  </div>;
}
