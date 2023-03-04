import React from "react";
import ForecastDay from "./ForecastDay";

function WeatherForecast({ forecastData }) {
  return (
    <div className="weather__forecast" id="forecast">
      {forecastData.map((dayData) => (
        <ForecastDay key={dayData.date} dayData={dayData} />
      ))}
    </div>
  );
}

export default WeatherForecast;