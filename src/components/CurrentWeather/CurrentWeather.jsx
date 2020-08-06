import React from 'react';
import styles from './CurrentWeather.module.scss';

const CurrentWeather = (props) => {
  const {
    city, temp, feels_like, forecast, icon,
  } = props;

  return (
    <div className={styles.currentWrapper}>
      {city}
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" srcSet="forecast icon" />
    </div>
  );
};

export default CurrentWeather;
