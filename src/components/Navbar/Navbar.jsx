import React from 'react';
import { Input } from '../UI/Input/Input';
import styles from './navbar.module.css'
import { store } from '../../store';

export const Navbar = ({search}) => {
  return (
    <div className={styles.navbar}>
      <Input 
        onChange={ (e) => {
          store.dispatch({
            type: 'SEARCH',
            query: e.target.value 
          })
        }} >
      </Input>
      <span className={[styles.item, styles.item1].join(' ')}>Navbar</span>
      <span className={[styles.item, styles.item2].join(' ')}>Navbar</span>
      <span className={[styles.item, styles.item3].join(' ')}>Get Random Qoute</span>
    </div>
  )
}
