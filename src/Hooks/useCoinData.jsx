import { useState, useEffect } from "react";
import axios from "axios";
import { COIN_API } from "../Components/API";

const useCoinData = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(`${COIN_API}`)
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return coinData;
}

export default useCoinData;