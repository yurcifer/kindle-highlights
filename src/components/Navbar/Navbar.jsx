import React from 'react';
import { Input } from '../UI/Input/Input';
import styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Input></Input>
      <span className={styles["navbar-item1"]}>Navbar</span>
      <span className={styles["navbar-item2"]}>Navbar</span>
      <span className={styles["navbar-item3"]}>Navbar</span>
    </div>
  )
}
