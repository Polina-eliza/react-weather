import React from 'react';

const WeatherDetails = ({ windSpeed, humidity, visibility, pressure }) => {
  return (
    <div className="highlight__container">
      <div className="highlights__wrapper">
        <div className="highlights__subheading">Wind speed</div>
        <div className="highlights__body" id="Wind">{windSpeed} km/h</div>
      </div>
      <div className="highlights__wrapper">
        <div className="highlights__subheading">Humidity</div>
        <div className="highlights__body" id="Humidity">{humidity}%</div>
      </div>
      <div className="highlights__wrapper">
        <div className="highlights__subheading">Visibility</div>
        <div className="highlights__body" id="Visibility">{visibility} km</div>
      </div>
      <div className="highlights__wrapper">
        <div className="highlights__subheading">Pressure</div>
        <div className="highlights__body" id="Pressure">{pressure}</div>
      </div>
    </div>
  );
};

export default WeatherDetails;