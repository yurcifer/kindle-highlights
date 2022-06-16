import React from 'react';
import styles from './highlight.module.css'

export const Highlight = ({title, highlight}) => {
  return (
    <div className={styles.wrapper}>
      <b>{title.title + ' '}</b><i>({title.author})</i><br/>
      {highlight}
    </div>
  )
}
