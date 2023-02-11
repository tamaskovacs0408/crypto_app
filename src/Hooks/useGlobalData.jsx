import { useState, useEffect } from "react";
import { GLOBAL_DATA_API } from "../Components/API";


const useGlobalData = () => {
  const [gData, setgData] = useState([]);

  useEffect(() => {
    fetch(GLOBAL_DATA_API)
      .then((res) => res.json())
      .then((data) => setgData(data))
      .catch((err) => console.log(err));
  }, []);

  return gData;
}

export default useGlobalData;