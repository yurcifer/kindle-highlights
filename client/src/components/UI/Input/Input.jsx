/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styles from './input.module.css';

export default function Input(props) {
  return (
    <div className={styles.wrapper}>
      <input placeholder="Search here" {...props} />
    </div>
  );
}
