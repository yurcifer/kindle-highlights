import React from 'react';
import styles from './input.module.css';

export const Input = (props) => {
  return (
    <div className={styles.wrapper}>
      <input placeholder="Search here" {...props}></input>
    </div>
  )
}
