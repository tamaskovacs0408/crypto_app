import React, {useState, useEffect} from "react";
import axios from "axios";
import uuid from "react-uuid";
import {COIN_API} from '../../../API'
import BTC from '../BTC/BTC';
import ETH from '../ETH/ETH';
import BNB from '../BNB/BNB';
import ADA from '../ADA/ADA';
import AVAX from '../AVAX/AVAX';
import Doge from '../Doge/Doge';
import SOL from '../SOL/SOL';

export default function MainMenu() {
  return (
    <div className="main_menu_container">
      <BTC />
      <ETH />
      <BNB />
      <ADA />
      <AVAX />
      <Doge />
      <SOL />
    </div>
  );
}
