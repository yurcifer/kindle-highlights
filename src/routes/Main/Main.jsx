/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react';
import DropZone from '../../components/DropZone/DropZone';
import HighlightsList from '../../components/HighlightsList/HighlightsList';
import ToPageTop from '../../components/UI/ToPageTop/ToPageTop';
import styles from './main.module.css';
// TODO: сделать это более читаемым
// eslint-disable-next-line react/prop-types
export default function Main() {
  // TODO: find more elegant way to force render
  const [, setForceRender] = useState(0); // state to force render
  const pageLength = useRef(50);

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1
      >= e.target.documentElement.scrollHeight
    ) {
      pageLength.current += 20;
      setForceRender((value) => value + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('dragleave', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.main__body}>
      <DropZone className="upload-button" />
      <div className="content-wrapper">
        <HighlightsList pageLength={pageLength.current} />
      </div>
      <ToPageTop />
    </div>
  );
}
