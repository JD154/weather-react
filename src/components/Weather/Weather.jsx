import React from 'react';
import PropTypes from 'prop-types';
import styles from './Weather.module.scss';

const Weather = ({ weather }) => {
  const date = String(new window.Date()).slice(3, 15);

  return (
    <div className={styles.currentWrapper}>
      Desde weather
      {date}
      {weather.temp}
      {weather.clouds}
      {weather.city}
      ,
      {weather.country}
      <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="" srcSet="forecast icon" />
    </div>
  );
};

Weather.propTypes = {
  weather: PropTypes.string.isRequired,
};

export default Weather;
