import React, { useEffect } from "react";
import "./WeatherInfo.css";

function WeatherInfo(props) {
  const { weatherData } = props;

  useEffect(() => {
    let now = new Date();
    let currentDay = document.querySelector(".current__day");
    let currentTime = document.querySelector(".current__time");

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];

    let hours = now.getHours();
    let minutes = (now.getMinutes().toString()).padStart(2,'0');

    currentDay.innerHTML = `${day},`;
    currentTime.innerHTML = `${hours}:${minutes}`;
  }, []);

  return (
    <div className="sidebar__container">
      <img
        className="main__img"
        id="icon"
        src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherData.icon}-day.png`}
        alt={weatherData.description}
      />
      <h2 className="weather__descr" id="description">
        {weatherData.description}
      </h2>
      <h2 className="main__city" id="city">
        {weatherData.city}
      </h2>
      <div className="current__data">
        <p className="current__day">{weatherData.date.toLocaleDateString("en-US", { weekday: "long" })},</p>
        <p className="current__time">{weatherData.date.toLocaleTimeString("en-US")}</p>
      </div>
      <hr />
      <h1 className="main__temperature" id="temperature">
        {Math.round(props.celsius)}°C
      </h1>
      <div className="sidebar__subheading" id="feels-like">
        {weatherData.feelsLike}
      </div>
    </div>
  );
}

export default WeatherInfo;