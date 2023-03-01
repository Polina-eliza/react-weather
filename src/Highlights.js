import React from "react";
import "./Highlights.css";

function Highlights(props) {
  const { weatherData } = props;

  return (
    <div className="highlight__container">
      <div className="highlights__wrapper">
        <div className="highlights__subheading">Wind speed</div>
        <div className="highlights__body" id="Wind">
          {props.data.wind} km/h
        </div>
      </div>
      <div className="highlights__wrapper">
        <div className="highlights__subheading">Humidity</div>
        <div className="highlights__body" id="Humidity">
          {props.dat.humidity}%
        </div>
      </div>
      <div className="highlights__wrapper">
        <div className="highlights__subheading">Visibility</div>
        <div className="highlights__body" id="Visibility">
          {props.dat.visibility} km
        </div>
      </div>
      <div className="highlights__wrapper">
        <div className="highlights__subheading">Pressure</div>
        <div className="highlights__body" id="Pressure">
          {props.data.pressure}
        </div>
      </div>
    </div>
  );
}

export default Highlights;