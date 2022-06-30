/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react';
import { useStore } from 'react-redux';
import { DropZone } from '../../components/DropZone/DropZone';
import { Highlight } from '../../components/Highlight/Highlight';
import { ToPageTop } from '../../components/UI/ToPageTop/ToPageTop';
import styles from './main.module.css';

// eslint-disable-next-line react/prop-types
export const Main = () => {
  // TODO: find more elegant way to force render
  const [, setForceRender] = useState(0); // state to force render
  const pageLength = useRef(50);
  const store = useStore();
  const highlights = store.getState().highlights.highlights || [];

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1
      >= e.target.documentElement.scrollHeight
    ) {
      pageLength.current += 20;
      setForceRender((value) => value + 1);
    }
  };

  //
  const search = (highlightsArr, query) => highlightsArr.filter((item) => JSON.stringify(item)
    .toLowerCase()
    .includes(query.toLowerCase()));

  useEffect(() => {
    window.addEventListener('dragleave', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
    window.addEventListener('scroll', handleScroll);
  }, []);
  // if (highlights.length) console.log(highlights);
  return (
    <div className={styles.main__body}>
      <DropZone className="upload-button" />
      <div className="content-wrapper">
        {highlights.length ? (
          search(highlights, store.getState().searchQuery)
            .slice(0, pageLength.current)
            .map((item) => <Highlight key={item.hash} {...item} />)
        ) : (
          <p>Data dosn&apos;t load yet</p>
        )}
      </div>
      <ToPageTop />
    </div>
  );
};
