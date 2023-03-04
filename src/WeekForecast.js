import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeekForecast.css";
import Highlights from "./Highlights";


export default function WeekForecast(props) {
  console.log(props);
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
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
    setUnit("fahrenheit");
  }

  function displayCelsiusTemperature(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (loaded) {
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
                <WeatherForecastDay key={index} data={dayData} unit={unit} />
              ))}
            </div>
            <Highlights weatherData={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}












