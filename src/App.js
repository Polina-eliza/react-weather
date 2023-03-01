import { useState, useEffect, useCallback } from "react";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import WeekForecast from "./WeekForecast";
import Highlights from "./Highlights";
import AuthorInfo from "./AuthorInfo";
import axios from 'axios';
import "./App.css";


export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Rome");

  const search = useCallback(() => {
    const apiKey = "6d48t90aao34607b488607a8df81d2bd";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?q=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }, [city]);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      feelsLike: `Feels like: ${response.data.main.feels_like}°C`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      visibility: response.data.visibility / 1000,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
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

  useEffect(() => {
    search();
  }, [search]);

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
    return "Loading..."
  }
}