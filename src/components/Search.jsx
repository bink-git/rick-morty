import React, { useState, useEffect } from 'react';
import styles from './Search.module.css';

const Search = ({ setSearch }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem('inputValue');
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('inputValue', value);
  }, [value]);

  return (
    <form className={styles.search}>
      <div className={styles['search-icon']}></div>
      <input
        className={styles['search-input']}
        type="text"
        placeholder="Filter by name..."
        onChange={(e) => {
          setSearch(e.target.value);
          setValue(e.target.value);
        }}
        value={value}
      />
    </form>
  );
};

export default Search;
