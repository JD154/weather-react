/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search/Search';
import Weather from './components/Weather/Weather';
import Forecast from './components/Forecast/Forecast';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('New York');
  const [weather, setWeather] = useState({});

  const api = {
    URL: 'https://api.openweathermap.org/data/2.5',
    KEY: 'ba253410b2c2380ef1c49aacd2cd2bd8',
  };

  useEffect(() => {
    axios.get(`${api.URL}/weather?q=${searchQuery}&units=metric&APPID=${api.KEY}`)
      .then((res) => {
        const weatherData = {
          clouds: res.data.weather[0].main,
          icon: res.data.weather[0].icon,
          temp: parseInt(res.data.main.temp),
          feelsLike: parseInt(res.data.main.feels_like),
          minTemp: parseInt(res.data.main.temp_min),
          maxTemp: parseInt(res.data.main.temp_max),
          humidity: res.data.main.humidity,
          city: res.data.name,
          country: res.data.sys.country,
        };
        setWeather(weatherData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchQuery]);

  return (
    <div className="App">
      <Search searchQuery={setSearchQuery} />
      <Weather weather={weather} />
      <Forecast weather={weather} />
    </div>
  );
}

export default App;
