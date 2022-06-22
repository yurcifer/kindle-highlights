/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import { useStore } from 'react-redux/es/exports';
import styles from './modal.module.css';

// eslint-disable-next-line react/prop-types
export const Modal = () => {
  // const [forceUseEffect, setForceUseEffect] = useState(0);
  const randomHighlight = useRef();

  const store = useStore();
  const { highlights } = store.getState().highlights;
  const closeModal = () => {
    store.dispatch({
      type: 'CLOSE',
    });
  };

  const randomIndex = Math.floor(Math.random() * (highlights.length - 1));
  randomHighlight.current = highlights[randomIndex];
  console.log(randomHighlight.current);

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
      className={[styles.modal, styles.active].join(' ')}
      onClick={closeModal}
      role="button"
      tabIndex="0"
      onKeyUp={closeModal}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {randomHighlight.current ? formatedHighlight(randomHighlight.current) : 'error'}
      </div>
    </div>
  );
};
