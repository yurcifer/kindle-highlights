import React from 'react';
import styles from './about.module.css';
// import kindleJPG from './kindle.jpg';
import clippingsJPG from './My-Clippings.jpg';

export default function About() {
  return (
    <div className={styles.content__wrapper}>
      <p>
        This site parses &quot;clippings.txt&quot; file that you can find in the root directory of
        your
        {' '}
        <a
          target="_blank"
          href="https://www.amazon.com/s?k=kindle+paperwhite&ref=nb_sb_noss"
          rel="noreferrer"
        >
          Kindle e-reader
        </a>
        . Here you can search through your highlights, copy them and get random ones.
      </p>
      <img src={clippingsJPG} alt="My Clippings.txt" />
      {/* <img src={kindleJPG} alt="kindle" /> */}
    </div>
  );
}
