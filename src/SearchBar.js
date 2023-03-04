import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(searchQuery);
  }

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <form className="input__form" onSubmit={handleSubmit}>
      <input
        id="searchQueryInput"
        type="text"
        name="searchQueryInput"
        placeholder="Search for places"
        value={searchQuery}
        onChange={handleChange}
      />
      <button type="submit" name="searchQuerySubmit">
        <div className="input__img">🔍</div>
      </button>
      <button className="btn__location" id="button-location">
        <div className="location__img">📍</div>
      </button>
    </form>
  );
}

export default SearchBar;