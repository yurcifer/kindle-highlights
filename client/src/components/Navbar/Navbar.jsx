import React, { useState } from 'react';
import { useStore } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Input from '../UI/Input/Input';
import styles from './navbar.module.css';

export default function Navbar() {
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
      <NavLink to="/" className={[styles.item, styles.item1].join(' ')}>
        Main
      </NavLink>
      <button
        to="#"
        className={[styles.item, styles.item2].join(' ')}
        onClick={openModal}
        triger={trigerModal}
        type="button"
      >
        Random Highlight
      </button>
      <NavLink to="/about" className={[styles.item, styles.item3].join(' ')}>
        About
      </NavLink>
    </div>
  );
}
