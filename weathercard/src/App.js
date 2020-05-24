import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/component';

function App() {
  return (
    <div className="App">
      <WeatherCard
        temp={-12}
        condition="Cloudy"
        city="San Mateo"
        country="USA"
      />
      <WeatherCard
        temp={13}
        condition="Clear"
        city="San Francisco"
        country="USA"
      />
      <WeatherCard
        temp={40}
        condition="Tornado"
        city="Portland"
        country="USA"
      />
    </div>
  );
}

export default App;
