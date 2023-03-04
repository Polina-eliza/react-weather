import React from "react";
import Header from "./Header";
import ToggleButton from "./ToggleButton";
import WeatherForecast from "./WeatherForecast";

function Main() {
  return (
    <div className="main">
      <div className="main__container">
        <Header />
        <ToggleButton />
        <WeatherForecast />
      </div>
    </div>
  );
}

export default Main;