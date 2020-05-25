import React, { useState } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/component';

function App() {
  const [city, setCity] = useState('Sydney, au');
  const [temp, setTemp] = useState('');
  const [condition, setCondition] = useState('');
  const [country, setCountry] = useState('');

  const data = async () => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=c80b69787ac9c776d1cf86f8a6c50ce7`
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    data().then((res) => {
      setTemp(res.main.temp);
      setCondition(res.weather[0].main);
      setCountry(res.sys.country);
      setCity(res.name);
    });
  };

  return (
    <div className="App">
      <WeatherCard
        temp={temp}
        condition={condition}
        city={city}
        country={country}
      />
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={(e) => handleSearch(e)}>Search</button>
    </div>
  );
}

export default App;
