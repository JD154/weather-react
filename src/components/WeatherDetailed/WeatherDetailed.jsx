/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTemperatureHigh, faThermometer, faTemperatureLow, faTint,
} from '@fortawesome/free-solid-svg-icons';
import styles from './WeatherDetailed.module.scss';

const WeatherDetailed = ({ weather, isFahrenheit }) => {
  const degreeSign = isFahrenheit ? '°F' : '°C';

  return (
    <div className={styles.weekWrapper}>
      <div className={styles.gridItem}>
        <FontAwesomeIcon icon={faThermometer} />
        <p className={styles.info}>
          {weather.feelsLike}
          <span>{degreeSign}</span>
        </p>
        <p className={styles.infoLabel}>RealFeel®</p>
      </div>
      <div className={styles.gridItem}>
        <FontAwesomeIcon icon={faTemperatureLow} />
        <p className={styles.info}>
          {weather.minTemp}
          <span>{degreeSign}</span>
        </p>
        <p className={styles.infoLabel}>Min</p>
      </div>
      <div className={styles.gridItem}>
        <FontAwesomeIcon icon={faTemperatureHigh} />
        <p className={styles.info}>
          {weather.maxTemp}
          <span>{degreeSign}</span>
        </p>
        <p className={styles.infoLabel}>Max</p>
      </div>
      <div className={styles.gridItem}>
        <FontAwesomeIcon icon={faTint} />
        <p className={styles.info}>
          {weather.humidity}
          %
        </p>
        <p className={styles.infoLabel}>Humidty</p>
      </div>
    </div>
  );
};

export default WeatherDetailed;
