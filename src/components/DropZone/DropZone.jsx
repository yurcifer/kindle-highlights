/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react';
import styles from './dropZone.module.css';
import { uploadFile } from '../../utilities/text_parser/parser';

export const DropZone = () => {
  let counter = 0;

  const wrapperRef = useRef(null);

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDragEnter = () => {
    counter++;
    wrapperRef.current.classList.add(styles.dragover);
  };

  const onDragLeave = () => {
    counter--;
    if (counter === 0) wrapperRef.current.classList.remove(styles.dragover);
  };

  const onDrop = (e = null) => {
    if (e.target.tagName !== 'INPUT') preventDefaults(e);
    wrapperRef.current.classList.remove(styles.dragover);
  };

  window.addEventListener('dragenter', onDragEnter);
  window.addEventListener('dragleave', onDragLeave);
  window.addEventListener('dragover', (e) => preventDefaults(e));
  window.addEventListener('drop', (e) => onDrop(e));

  return (
    <div
      ref={wrapperRef}
      className={styles['drop-file-input']}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div className={styles['drop-file-input__label']}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ fill: 'rgba(0, 0, 0, 1)' }}>
          <path d="M11 15h2V9h3l-4-5-4 5h3z" />
          <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z" />
        </svg>
        <p>Drag & Drop "My clippings.txt" here</p>
      </div>
      <input type="file" value="" onChange={(e) => uploadFile(e)} />
    </div>
  );
};
