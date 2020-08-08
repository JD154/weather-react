/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import { Alert } from 'antd';
import axios from 'axios';
import Search from './components/Search/Search';
import Weather from './components/Weather/Weather';
import WeatherDetailed from './components/WeatherDetailed/WeatherDetailed';
import convertDegrees from './utils/convertDegrees';

import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('New York');
  const [weather, setWeather] = useState({});
  const [isFahrenheit, setisFahrenheit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const api = {
      URL: 'https://api.openweathermap.org/data/2.5',
      KEY: 'ba253410b2c2380ef1c49aacd2cd2bd8',
    };
    setIsLoading(true);
    axios.get(`${api.URL}/weather?q=${searchQuery}&units=metric&APPID=${api.KEY}`)
      .then((res) => {
        const weatherData = {
          clouds: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
          temp: Math.round(res.data.main.temp),
          feelsLike: Math.round(res.data.main.feels_like),
          minTemp: Math.round(res.data.main.temp_min),
          maxTemp: Math.round(res.data.main.temp_max),
          humidity: res.data.main.humidity,
          city: res.data.name,
          country: res.data.sys.country,
        };
        setWeather(weatherData);
        setIsLoading(false);
      })
      .catch((err) => {
        const weatherData = {
          clouds: '-',
          icon: '01d',
          temp: Math.round(0),
          feelsLike: Math.round(0),
          minTemp: Math.round(0),
          maxTemp: Math.round(0),
          humidity: 0,
          city: '-',
          country: '-',
        };
        setWeather(weatherData);
        setIsLoading(false);
        setError(true);
        // eslint-disable-next-line no-console
        console.log(err);
      });
    // eslint-disable-next-line
  }, [searchQuery]);

  useEffect(() => {
    const weatherData = {
      clouds: weather.clouds,
      icon: weather.icon,
      temp: convertDegrees(weather.temp, isFahrenheit),
      feelsLike: convertDegrees(weather.feelsLike, isFahrenheit),
      minTemp: convertDegrees(weather.minTemp, isFahrenheit),
      maxTemp: convertDegrees(weather.maxTemp, isFahrenheit),
      humidity: weather.humidity,
      city: weather.city,
      country: weather.country,
    };
    setWeather(weatherData);
    // eslint-disable-next-line
  }, [isFahrenheit]);

  return (
    <div className="App">
      <div className="error">{error ? (<Alert message="Can't fetch your request" type="error" closeText="Close Now" />) : ''}</div>
      <Search searchQuery={setSearchQuery} isLoading={isLoading} isFahrenheit={isFahrenheit} />
      <Weather weather={weather} fahrenheit={setisFahrenheit} isFahrenheit={isFahrenheit} />
      <WeatherDetailed weather={weather} isFahrenheit={isFahrenheit} />
    </div>
  );
}

export default App;
