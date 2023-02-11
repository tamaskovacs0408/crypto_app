import Global from "./Global";
import MenuNav from "../MenuNav";
import useGlobalData from "../../Hooks/useGlobalData";

export default function GlobalData() {
  const gData = useGlobalData();

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
