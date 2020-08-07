/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTemperatureHigh, faThermometer, faTemperatureLow, faTint,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Forecast.module.scss';

const Forecast = ({ weather, isFahrenheit }) => {
  const degreeSign = isFahrenheit ? '°F' : '°C';
  console.log(`desde forecast: ${isFahrenheit}`);

  return (
    <div className={styles.weekWrapper}>
      <div className={styles.gridItem}>
        <FontAwesomeIcon icon={faThermometer} />
        <p className={styles.info}>
          {weather.feelsLike}
          {' '}
          <span>{degreeSign}</span>
        </p>
        <p className={styles.infoLabel}>Real feel</p>
      </div>
      <div className={styles.gridItem}>
        <FontAwesomeIcon icon={faTemperatureLow} />
        <p className={styles.info}>
          {weather.minTemp}
          {' '}
          <span>{degreeSign}</span>
        </p>
        <p className={styles.infoLabel}>Min</p>
      </div>
      <div className={styles.gridItem}>
        <FontAwesomeIcon icon={faTemperatureHigh} />
        <p className={styles.info}>
          {weather.maxTemp}
          {' '}
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

Forecast.propType = {
  weather: PropTypes.string.isRequired,
  isFahrenheit: PropTypes.bool.isRequired,
};

export default Forecast;
