import React, { useEffect, useState } from 'react';
import styles from './toPageTop.module.css';

export const ToPageTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const EL = window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', EL);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {visible && (
        <div className={styles.btn} onClick={scrollUp} role="button" tabIndex="0" aria-hidden="true">
          <svg width="30" height="50" viewBox="0 0 185 284" fill="none">
            <rect width="185" height="284" className={styles.back} />
            <path d="M93 0L184.924 91.9239L166.539 110.309L74.6152 18.3848L93 0Z" fill="#e3e3e3" className={styles.three} />
            <rect y="93" width="130" height="26" transform="rotate(-45 0 93)" fill="#e3e3e3" className={styles.two} />
            <rect x="81" y="33" width="26" height="251" fill="#e3e3e3" className={styles.middle} />
          </svg>
        </div>
      )}
    </div>
  );
};
