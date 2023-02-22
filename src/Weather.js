import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const [WeatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function displayWeatherCondition(response) {
        setWeatherData({
            ready: true,
            
        })
    }




    return (
    <div className="layout__container">
      <div className="sidebar">
        <div className="sidebar__container">
          <form className="input__form" id="search-form">
            <input
              id="searchQueryInput"
              type="text"
              name="searchQueryInput"
              placeholder="Search for places"
              value=""
            />
            <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
              <div className="input__img">🔍</div>
            </button>
            <button className="btn__location" id="button-location">
              <div className="location__img">📍</div>
            </button>
          </form>
          <img
            className="main__img"
            id="icon"
            src="http://openweathermap.org/img/wn/10d@4x.png"
            alt="sunny"
          />
  
          <h2 className="weather__descr" id="description">
            Cloudy
          </h2>
          <h2 className="main__city" id="city">
            Rome
          </h2>
          <div className="current__data">
            <p className="current__day">Monday,</p>
            <p className="current__time">16:00</p>
          </div>
          <hr />
          <h1 className="main__temperature" id="temperature">
            12°C
          </h1>
          <div className="sidebar__subheading" id="feels-like">
            Feels like: 10°C
          </div>
        </div>
      </div>

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
        <div className="weather__forecast" id="forecast"></div>
        <div className="today__subheading">Today's Highlights</div>
        <div className="highlight__container">
          <div className="highlights__wrapper">
            <div className="highlights__subheading">Wind speed</div>
            <div className="highlights__body" id="Wind">
              7.70 km/h
            </div>
          </div>
          <div className="highlights__wrapper">
            <div className="highlights__subheading">Humidity</div>
            <div className="highlights__body" id="Humidity">
              12%
            </div>
          </div>
          <div className="highlights__wrapper">
            <div className="highlights__subheading">Visibility</div>
            <div className="highlights__body" id="Visibility">
              5.2 km
            </div>
          </div>
          <div className="highlights__wrapper">
            <div className="highlights__subheading">Pressure</div>
            <div className="highlights__body" id="Pressure">
              1008
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
    };
  

  
  
  
  

  