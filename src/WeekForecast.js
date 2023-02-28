import React from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeekForecast.css";

function WeekForecast(props) {
  const { forecastData } = props;

  return (
    <div>
      <div className="main">
          <div className="main__container">
    <div className="header__container">
      <div className="main__subheading">Week</div>
      <div className="button__wrapper">
        <button className="btn__degrees active" id="celsius-button">
          <a className="cel" href="/" id="celsius-link">
            °C
          </a>
        </button>
        <button className="btn__degrees" id="fahrenheit-button">
          <a className="fah" href="/" id="fahrenheit-link">
            °F
          </a>
        </button>
      </div>
    </div>
    <div className="weather__forecast" id="forecast">
      {forecastData.map((dayData, index) => (
        <WeatherForecastDay key={index} data={dayData} />
      ))}
    </div>
  </div>
  </div>
  </div>
);
}

export default WeekForecast;