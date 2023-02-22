import React from "react";
import "./Weather.css";

const Main = () => (
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
);

export default Main;