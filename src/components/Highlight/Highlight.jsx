import React, { useState } from 'react';
import styles from './highlight.module.css'
import { useStore } from 'react-redux'

export const Highlight = ({ title, highlight, author } ) => {

  const store = useStore();
  const copyLabel = 'Copy to clipboard';
  const copiedLabel = 'Copied';
  const errorLabel = 'Copied';

  const [copyBtnState, setCopyBtnState] = useState(copyLabel)
  

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

  const copyToClipboard = () => {
    const citation = `"${highlight}" - ${title.author}`
    try {
      navigator.clipboard.writeText(citation);
      setCopyBtnState(copiedLabel);
      setTimeout( () => setCopyBtnState(copyLabel), 2000);

    } catch (e) {
      console.error('Copy error' + e);
      setCopyBtnState(errorLabel)
      setTimeout( () => setCopyBtnState(copyLabel), 3000);
    }
  }

  return (
    <div className={styles.wrapper} >
      {/* <b>{title.title + ' '}</b><i>({title.author})</i><br/> */}
      <b dangerouslySetInnerHTML={{__html: textHighlight(title.title + ' ')}}></b>
      <i dangerouslySetInnerHTML={{__html: textHighlight(`(${title.author})`)}}></i><br/>
      <div dangerouslySetInnerHTML={{__html: textHighlight(highlight)}} />
      <button onClick={copyToClipboard}>{copyBtnState}</button>
    </div>
  )
}
