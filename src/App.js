import { useState } from "react";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import WeekForecast from "./WeekForecast";
import Highlights from "./Highlights";
import AuthorInfo from "./AuthorInfo";
import axios from "axios";
import "./App.css";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Rome");

  function search() {
    const apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.name,
      temperature: response.data.temperature.current,
      feelsLike: `Feels like: ${response.data.temperature.feels_like}°C`,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      visibility: response.data.visibility / 1000,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="layout__container">
        {weatherData && (
          <>
            <WeatherInfo weatherData={weatherData} />
            <WeekForecast coordinates={weatherData.coordinates} />
          </>
        )}
        <AuthorInfo />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}