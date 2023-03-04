import React, { useState } from 'react';
import "./SearchForm.css";

function SearchForm(props) {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.onSearch(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <form className="input__form" id="search-form" onSubmit={handleSubmit}>
      <input
        id="searchQueryInput"
        type="text"
        name="searchQueryInput"
        placeholder="Search for places"
        value={city}
        onChange={handleCityChange}
      />
      <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
        <div className="input__img">🔍</div>
      </button>
      <button className="btn__location" id="button-location">
        <div className="location__img">📍</div>
      </button>
    </form>
  );
}

export default SearchForm;
