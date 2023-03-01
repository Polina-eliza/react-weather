import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css"

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="day__wrapper">
      <div className="day">{formatDay(data.time)}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="degrees">
        <span className="degrees__max"> {maxTemperature()}°/</span>
        <span className="degrees__min"> {minTemperature()}°</span>
      </div>
    </div>
  );
}

export default WeatherForecastDay;