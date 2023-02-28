import React from "react";

function Image() {
  return (
    <img
      className="main__img"
      id="icon"
      src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherData.icon}-day.png`}
      alt={weatherData.description}
    />
  );
}

export default Image;