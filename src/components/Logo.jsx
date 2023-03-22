import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <img src="./img/logo.png" alt="logo" className={styles.logo} />
    </>
  );
};

export default Logo;
