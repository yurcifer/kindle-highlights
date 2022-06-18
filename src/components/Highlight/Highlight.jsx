import React from 'react';
import styles from './highlight.module.css'
import { store } from '../../store';

//TODO: подсветка всех вхождений, а не только первых
//TODO: подсветка независимо от регистра
export const Highlight = ({title, highlight}) => {

  function textHighlight (text) {
    const query = store.getState().searchQuery;
    const index = text.indexOf(query);
    if (index >= 0) { 
     const result = text.substring(0, index) + "<mark>" + text.substring(index,index+query.length) + "</mark>" + text.substring(index + query.length);
     return result;
    } else {
      return text;
    }
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
