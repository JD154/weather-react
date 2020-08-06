import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBox from './components/SearchBox/SearchBox';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WeekWeather from './components/WeekWeather/WeekWeather';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [weather, setWeather] = useState('');

  const api = {
    URL: 'https://api.openweathermap.org/data/2.5',
    KEY: 'ba253410b2c2380ef1c49aacd2cd2bd8',
  };

  useEffect(() => {
    if (searchQuery) {
      axios.get(`${api.URL}/weather?q=${searchQuery}&units=metric&APPID=${api.KEY}`)
        .then((res) => {
          setWeather(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchQuery]);

  return (
    <div className="App">
      <SearchBox searchQuery={setSearchQuery} />
      <CurrentWeather weather={weather} />
      <WeekWeather weather={weather} />
    </div>
  );
}

export default App;
