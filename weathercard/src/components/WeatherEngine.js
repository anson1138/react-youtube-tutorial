import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard/component';

const WeatherEngine = ({ location }) => {
  const [query, setQuery] = useState('Sydney, au');
  const [weather, setWeather] = useState({
    temp: null,
    condition: null,
    country: null,
    city: null,
  });

  const getWeather = async (q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=c80b69787ac9c776d1cf86f8a6c50ce7`
    );
    const resJSON = await apiRes.json();
    setWeather({
      temp: resJSON.main.feels_like,
      condition: resJSON.weather[0].main,
      country: resJSON.sys.country,
      city: resJSON.name,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div className="App">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
};

export default WeatherEngine;
