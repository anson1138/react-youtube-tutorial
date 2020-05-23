import React from 'react';

const WeatherCard = (props) => {
  return (
    <div className="card">
      <div className="location">
        <h1 className="city">San Francisco</h1>
        <h3 className="country">USA</h3>
      </div>
      <img className="icon" src="./img/Mostly Cloudy-2x.png" alt="Weather Icon" />
      <h1 className="temp">22 ˚C</h1>
      <h3 className="condition">Cloudy</h3>
    </div>
  );
}
 
export default WeatherCard;
