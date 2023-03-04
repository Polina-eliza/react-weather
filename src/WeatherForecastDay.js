import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";


export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = showTemperature(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = showTemperature(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function showTemperature(temperature) {
    if (props.unit === "celsius") {
      return Math.round(temperature);
    } else {
      return Math.round((temperature * 9) / 5 + 32);
    }
  }

  return (
    <div className="day__wrapper">
      <div className="day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={36} />
      <div className="degrees">
        <span className="degrees__max"> {maxTemperature()}/</span>
        <span className="degrees__min"> {minTemperature()}</span>
      </div>
    </div>
  );
}