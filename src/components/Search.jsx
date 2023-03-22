import React from 'react';
import styles from './Search.module.css';

const Search = ({ setSearch }) => {
  return (
    <form className={styles.search}>
      <div className={styles['search-icon']}></div>
      <input
        className={styles['search-input']}
        type="text"
        placeholder="Filter by name..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
};

export default Search;
