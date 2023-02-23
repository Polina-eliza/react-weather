import React from 'react';
import SearchBar from './SearchBar';
import WeatherDetails from './WeatherDetails';
import WeatherForecast from './WeatherForecast';
import HighlightList from './HighlightList';
import Author from './Author';

const App = () => {
  const authorName = "Polina";
  const authorLink = "https://github.com/Polina-eliza";

  return (
    <div>
      <SearchBar />
      <WeatherDetails />
      <WeatherForecast />
      <HighlightList />
      <Author name={authorName} link={authorLink} />
    </div>
  );
};

export default App;