import React from "react";

function Text() {
  return (
    <React.Fragment>
      <h2 className="weather__descr" id="description">
        {weatherData.description}
      </h2>
      <h2 className="main__city" id="city">
        {weatherData.city}
      </h2>
      <div className="current__data">
        <p className="current__day">{weatherData.date.toLocaleDateString("en-US", { weekday: "long" })},</p>
        <p className="current__time">{weatherData.date.toLocaleTimeString("en-US")}</p>
      </div>
      <hr />
      <h1 className="main__temperature" id="temperature">
        {Math.round(weatherData.temperature)}°C
      </h1>
      <div className="sidebar__subheading" id="feels-like">
        {weatherData.feelsLike}
      </div>
    </React.Fragment>
  );
}

export default Text;