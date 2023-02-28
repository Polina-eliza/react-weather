import React from "react";
import WeatherForecastDay from "./WeatherForecastDay";

function WeekForecast(props) {
  const { forecastData } = props;

  return (
    <div className="weather__forecast" id="forecast">
      <div className="row">
        {forecastData.map((dailyForecast) => (
          <div className="col-2" key={dailyForecast.date}>
            <WeatherForecastDay forecast={dailyForecast} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeekForecast;