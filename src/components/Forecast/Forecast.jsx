import React from 'react';
import styles from './Forecast.module.scss';

const Forecast = (props) => {
  const { main } = props;

  return (
    <div className={styles.weekWrapper}>
      Hola mundo
    </div>
  );
};

export default Forecast;
