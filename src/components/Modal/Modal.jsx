/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';
import { useStore } from 'react-redux/es/exports';
import styles from './modal.module.css';

// eslint-disable-next-line react/prop-types
export const Modal = () => {
  const [randomHighlight, setRandomHighlight] = useState(null);
  const modalRef = useRef();
  const store = useStore();
  const isActive = store.getState().modal;

  const { highlights } = store.getState().highlights;
  const closeModal = () => {
    store.dispatch({
      type: 'CLOSE',
    });
  };

  const getRandomHighlight = () => {
    const randomIndex = Math.floor(Math.random() * (highlights.length - 1));
    setRandomHighlight(highlights[randomIndex]);
  };

  useEffect(() => {
    // this condition is matter for transition effect on modal close
    // otherwise text will update during animation
    if (isActive === true) {
      getRandomHighlight();
    }
  }, [isActive]);

  const formatedHighlight = ({ highlight, title }) => (
    <>
      <p>{highlight}</p>
      <b>{title.author}</b>
      {' '}
      <p><i>{title.title}</i></p>
    </>
  );

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className={isActive ? [styles.modal, styles.active].join(' ') : styles.modal}
    >
      <div
        className={isActive ? [styles.modal__content, styles.active].join(' ') : styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {randomHighlight ? formatedHighlight(randomHighlight) : 'error'}
        <button type="button" onClick={getRandomHighlight}>Another Highlight</button>
      </div>
    </div>
  );
};
