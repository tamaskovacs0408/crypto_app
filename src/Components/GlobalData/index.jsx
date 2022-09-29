import React, { useState, useEffect } from "react";
import "./index.scss";
import { GLOBAL_DATA_API } from "../API";

export default function GlobalData() {
  const [globalData, setGlobalData] = useState([]);

  useEffect(() => {
    fetch(GLOBAL_DATA_API)
      .then((response) => response.json())
      .then((data) => setGlobalData(data));
  }, []);
  

  return <div>globaldata</div>;
}
