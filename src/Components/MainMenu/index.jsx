import "./index.scss";
import uuid from "react-uuid";
import Currency from "../Currency";
import MenuNav from "../MenuNav";
import useCoinData from "../../Hooks/useCoinData";


export default function MainMenu() {
  const coinData = useCoinData();

  return (
    <div>
      <MenuNav />
      <div className="main_menu_container">
        {coinData
          .filter((coin) => coin.rank <= 30)
          .sort((coin1, coin2) => coin1.rank - coin2.rank)
          .map((data) => {
            return <Currency key={uuid()} id={uuid()} data={data} />;
          })}
      </div>
    </div>
  );
}
{
  /*  */
}
