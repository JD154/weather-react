import React from 'react';
import { Input } from 'antd';

import styles from './Search.module.scss';

const { Search } = Input;

// eslint-disable-next-line react/prop-types
const SearchBox = ({ searchQuery, isLoading }) => {
  const QueryValueHandler = (e) => {
    searchQuery(e);
  };

  return (
    <div className={styles.searchWrapper}>
      <Search
        placeholder="Search location"
        onSearch={QueryValueHandler}
        style={{ width: 200 }}
        loading={isLoading}
      />
    </div>

  );
};

export default SearchBox;
