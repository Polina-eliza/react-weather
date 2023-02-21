import React from "react";
import "./Weather.css";

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;