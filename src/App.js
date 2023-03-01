import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import WeekForecast from "./WeekForecast";
import Highlights from "./Highlights";
import AuthorInfo from "./AuthorInfo";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from 'axios';
import "./App.css";


export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Rome");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: data.name,
      temperature: data.main.temp,
      feelsLike: `Feels like: ${data.main.feels_like}°C`,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      visibility: data.visibility / 1000,
      pressure: data.main.pressure,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      date: new Date(),
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }


    function search() {
    const apiKey = "6d48t90aao34607b488607a8df81d2bd";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="layout__container">
        <SearchForm
          city={city}
          onCityChange={handleCityChange}
          onSubmit={handleSubmit}
        />
        {weatherData && (
          <>
            <WeatherInfo weatherData={weatherData} />
            <WeekForecast city={city} />
            <Highlights weatherData={weatherData} />
          </>
        )}
        <AuthorInfo />
      </div>
    );
  } else {
    search();
    return "Loading..."
  }
}
  
 

