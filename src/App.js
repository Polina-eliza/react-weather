import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import WeekForecast from "./WeekForecast";
import Highlights from "./Highlights";
import AuthorInfo from "./AuthorInfo";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    const apiKey = "<your-openweathermap-api-key>";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    async function fetchWeatherData() {
      try {
        const response = await fetch(apiUrl);

        if (response.ok) {
          const data = await response.json();

          const weatherData = {
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
          };

          setWeatherData(weatherData);
        } else {
          console.log("Failed to fetch weather data.");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (city !== "") {
      fetchWeatherData();
    }
  }, [city]);

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

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
}

export default App;