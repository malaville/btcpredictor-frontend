import React from "react";
import ChartFrappe from "./ChartFrappe";

export const Home = () => {
  return (
    <div id="home-container-div">
      <h1>BTC-PREDICTOR-2000</h1>
      <ChartFrappe indicator="btc-daily" />
      <ChartFrappe indicator="trends-daily" />
    </div>
  );
};
