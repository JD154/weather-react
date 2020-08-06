import React from 'react';
import styles from './Weather.module.scss';

const Weather = (props) => {
  const { weather } = props;

  return (
    <div className={styles.currentWrapper}>
      Desde weather
      {/* <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" srcSet="forecast icon" /> */}
    </div>
  );
};

export default Weather;
