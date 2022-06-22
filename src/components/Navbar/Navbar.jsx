import React from 'react';
import { useStore } from 'react-redux';
import { Input } from '../UI/Input/Input';
import styles from './navbar.module.css';

export const Navbar = () => {
  const store = useStore();
  return (
    <div className={styles.navbar}>
      <Input
        onChange={(e) => {
          store.dispatch({
            type: 'SEARCH',
            query: e.target.value,
          });
        }}
      />
      <span className={[styles.item, styles.item1].join(' ')}>Navbar</span>
      <span className={[styles.item, styles.item2].join(' ')}>Navbar</span>
      <span className={[styles.item, styles.item3].join(' ')}>Get Random Qoute</span>
    </div>
  );
};
