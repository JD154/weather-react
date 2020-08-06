import React from 'react';
import styles from './WeekWeather.module.scss';

const WeekWeather = (props) => {
  const { main } = props;

  return (
    <div className={styles.weekWrapper}>
      Hola mundo
    </div>
  );
};

export default WeekWeather;
