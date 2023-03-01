import React from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeekForecast.css";

export default function WeekForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
  let lon = coordinates.longitude;
  let lat = coordinates.latitude;
  let apiKey = "6d48t90aao34607b488607a8df81d2bd";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
  return (
    <div>
      <div className="main">
          <div className="main__container">
    <div className="header__container">
      <div className="main__subheading">Week</div>
      <div className="button__wrapper">
        <button className="btn__degrees active" id="celsius-button">
          <a className="cel" href="/" id="celsius-link">
            °C
          </a>
        </button>
        <button className="btn__degrees" id="fahrenheit-button">
          <a className="fah" href="/" id="fahrenheit-link">
            °F
          </a>
        </button>
      </div>
    </div>
    <div className="weather__forecast" id="forecast">
      {forecastData.map((dayData, index) => (
        <WeatherForecastDay key={index} data={dayData} />
      ))}
    </div>
  </div>
  </div>
  </div>
);
} else {
  load()
  return null;
}
}

