/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styles from './input.module.css';

export const Input = (props) => (
  <div className={styles.wrapper}>
    <input placeholder="Search here" {...props} />
  </div>
);
