import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Weather.module.scss';
import getIcon from '../../Utils/getIcon';

const Weather = ({ weather, fahrenheit, isFahrenheit }) => {
  const fahrenheitHandler = (e) => {
    fahrenheit(e);
  };

  const iconRoute = getIcon(weather.icon);
  const degreeSign = isFahrenheit ? '°F' : '°C';

  return (
    <div className={styles.currentWrapper}>
      <div className={styles.infoWrapper}>
        <div className={styles.weatherTemp}>
          <img src={iconRoute} alt="" srcSet="Designed by Freepik" />
          <p>
            {weather.temp}
            <span>{degreeSign}</span>
          </p>
        </div>
        <div className={styles.weatherInfo}>
          <p className={styles.clouds}>{weather.clouds}</p>
          <p className={styles.city}>
            <span>
              <FontAwesomeIcon className={styles.locationIcon} icon={faMapMarkerAlt} />
              {weather.city}
            </span>
            ,

            {weather.country}
          </p>
        </div>
      </div>
      <div className={styles.tempToggle}>
        <span>
          Celsius
        </span>
        <Switch onChange={fahrenheitHandler} />
        <span>Fahrenheit</span>
      </div>
    </div>
  );
};

Weather.propTypes = {
  weather: PropTypes.shape({
    icon: PropTypes.string,
    clouds: PropTypes.string,
    temp: PropTypes.number,
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  fahrenheit: PropTypes.func.isRequired,
  isFahrenheit: PropTypes.bool.isRequired,
};

export default Weather;
