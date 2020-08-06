import React from 'react';
import PropTypes from 'prop-types';
import styles from './Forecast.module.scss';

const Forecast = ({ weather }) => (
  <div className={styles.weekWrapper}>
    {weather.minTemp}
  </div>
);

Forecast.propType = {
  weather: PropTypes.object.isRequired,
};

export default Forecast;
