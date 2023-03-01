import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeekForecast.css";

export default function WeekForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [unit, setUnit] = useState("celsius");

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiKey = "6d48t90aao34607b488607a8df81d2bd";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function displayFahrenheitTemperature(event) {
    event.preventDefault();
    setTemperature((temperature * 9) / 5 + 32);
    setUnit("fahrenheit");
  }

  function displayCelsiusTemperature(event) {
    event.preventDefault();
    setTemperature(celsiusTemperature);
    setUnit("celsius");
  }

  function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
  }

  function search(city) {
    let apiKey = "6d48t90aao34607b488607a8df81d2bd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?city=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function showTemperature() {
    if (unit === "celsius") {
      return Math.round(temperature);
    } else {
      return Math.round((temperature * 9) / 5 + 32);
    }
  }

  let celsiusTemperature = null;

  if (loaded) {
    celsiusTemperature = forecast[0].temp.day;
    setTemperature(celsiusTemperature);
    return (
      <div>
        <div className="main">
          <div className="main__container">
            <div className="header__container">
              <div className="main__subheading">Week</div>
              <div className="button__wrapper">
                <button
                  className={`btn__degrees ${
                    unit === "celsius" ? "active" : ""
                  }`}
                  id="celsius-button"
                  onClick={displayCelsiusTemperature}
                >
                  °C
                </button>
                <button
                  className={`btn__degrees ${
                    unit === "fahrenheit" ? "active" : ""
                  }`}
                  id="fahrenheit-button"
                  onClick={displayFahrenheitTemperature}
                >
                  °F
                </button>
              </div>
            </div>
            <div className="weather__forecast" id="forecast">
              {forecast.map((dayData, index) => (
                <WeatherForecastDay key={index} data={dayData} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
