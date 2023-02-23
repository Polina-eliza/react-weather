import React from 'react';

const WeatherForecast = ({ forecastData }) => {
  return (
    <div className="weather-forecast">
      <h3 className="weather-forecast__title">5-Day Forecast</h3>
      <div className="weather-forecast__container">
        {forecastData.map((item, index) => (
          <div key={index} className="weather-forecast__item">
            <div className="weather-forecast__item-date">{item.date}</div>
            <div className="weather-forecast__item-icon">
              <img src={item.iconUrl} alt={item.condition} />
            </div>
            <div className="weather-forecast__item-temp">
              {item.temperature}&deg;C
            </div>
            <div className="weather-forecast__item-condition">
              {item.condition}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;