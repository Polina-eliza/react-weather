import React from 'react';
import PropTypes from 'prop-types';

function ForecastDay({ day, temperature }) {
    const date = new Date(day.dt * 1000);
    const dayOfWeek = date.toLocaleString("en-us", { weekday: "long" });
    const icon = day.weather[0].icon;
    const description = day.weather[0].description;
  
    return (
      <div className="forecast__day">
        <div className="forecast__date">{dayOfWeek}</div>
        <img
          className="forecast__img"
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={description}
        />
        <div className="forecast__temp">{Math.round(temperature)}°C</div>
      </div>
    );
  }