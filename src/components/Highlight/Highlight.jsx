import React from 'react';
import styles from './highlight.module.css'
import { store } from '../../store';

export const Highlight = ({title, highlight}) => {

  const highlightNextEntry = (text, queryLength, index) => {
    return (
      text.substring(0, index) 
      + "<mark>" + text.substring(index, index + queryLength) + "</mark>" 
      + text.substring(index + queryLength)
    );
  }

  // function to mark all searched symbols
  function textHighlight (text, fromIndex = 0) {
    const markTextLength = 13;
    const query = store.getState().searchQuery.toLowerCase();

    if (!query.length) return text;
    let index = text.toLowerCase().indexOf(query, fromIndex);
    if (index === -1) return text;

    const modifiedText = highlightNextEntry(text, query.length, index);
    return textHighlight(modifiedText, index + query.length + markTextLength);
  }

  return (
    <div className={styles.wrapper} >
      {/* <b>{title.title + ' '}</b><i>({title.author})</i><br/> */}
      <b dangerouslySetInnerHTML={{__html: textHighlight(title.title + ' ')}}></b>
      <i dangerouslySetInnerHTML={{__html: textHighlight(`(${title.author})`)}}></i><br/>
      <div dangerouslySetInnerHTML={{__html: textHighlight(highlight)}} />
    </div>
  )
}
