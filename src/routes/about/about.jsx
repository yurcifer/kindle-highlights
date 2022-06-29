import React from 'react';
import styles from './about.module.css';
import kindleJPG from './kindle.jpg';

export default function About() {
  return (
    <div className={styles.content__wrapper}>
      <p>
        This site parses &quot;clippings.txt&quot; file that you can find in the root directory of
        your Kindle e-reader. Here you can search through your highlights, copy them and get random
        ones.
      </p>
      <img src={kindleJPG} alt="kindle" />
    </div>
  );
}
