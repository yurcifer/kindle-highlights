import React from 'react';
import styles from './highlight.module.css'

export const Highlight = ({item}) => {
  return (
    <div className={styles.wrapper}>
      <b>{item.title}</b><br/>
      {item.highlight}
    </div>
  )
}
