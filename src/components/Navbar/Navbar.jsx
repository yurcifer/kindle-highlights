import React, { useState } from 'react';
import { useStore } from 'react-redux';
import { Input } from '../UI/Input/Input';
import styles from './navbar.module.css';

export const Navbar = () => {
  const [trigerModal, setTirgerModal] = useState(0);
  const store = useStore();
  const openModal = () => {
    setTirgerModal(trigerModal + 1);
    store.dispatch({
      type: 'OPEN',
    });
  };

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
      <span
        className={[styles.item, styles.item3].join(' ')}
        onClick={openModal}
        role="button"
        tabIndex="0"
        onKeyPress={openModal}
        triger={trigerModal}
      >
        Get Random Qoute
      </span>
    </div>
  );
};
