import React from "react";
import "./WeatherForecastDay.css"

function WeatherForecastDay(props) {
  const { data } = props;

  const formatDay = (timestamp) => {
    // Implement formatDay function logic here
  }

  return (
    <div className="day__wrapper">
      <div className="day">{formatDay(data.time)}</div>
      <img className="week__img" src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${data.condition.icon}.png`} alt="" />
      <div className="degrees">
        <span className="degrees__max">{Math.round(data.temperature.maximum)}°/</span>
        <span className="degrees__min">{Math.round(data.temperature.minimum)}°</span>
      </div>
    </div>
  );
}

export default WeatherForecastDay;