import { store } from './../../store/index.js'

const cutSideSpaces = (str) => {
  return str.replace(/^\s+|\s+$/g, '')
}

const splitMetadata = (str) => {
  let cuttedStr = str.replace(/^-\s/, '');
  const splitted = cuttedStr.split('|')
  return {
    location: splitted[0],
    date:splitted[1]
  }
}

const splitTitle = (str) => {
  let reverseStrArray = [];
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ")") continue;
    if (str[i] === "(") break;
    reverseStrArray.push(str[i]);
  }

  const author = reverseStrArray.reverse().join("");
  const title = str.replace(`(${author})`, '');

  return {
    author: cutSideSpaces(author),
    title: cutSideSpaces(title)
  }
}


export const uploadFile = async (e) => {

  e.preventDefault();
  const reader = new FileReader();

  reader.onload = async (e) => {
    const text = (e.target.result);

    const segments = text.split('==========');
    const highlighsArray = [];
    
    segments.forEach( (item) => {
  
      // clippings file has full of \r sequence, I guess it is unnecessary in JSON store
      const splitted = item.replace(/\r/g, '').split(/\n/);
      // delete empty lines
      for (let index in splitted) {
        if (splitted[index].length === 0) {
          splitted.splice(index, 1);
        }
      }
      // I saw some empty highlights (may be created by missclick), so added this string
      if (!splitted[2]) return;
      highlighsArray.push(
        {
          title: splitTitle(splitted[0]),
          meta: splitMetadata(splitted[1]),
          highlight: splitted[2]
        }
      );

    })

    store.dispatch({type: 'INIT', data: highlighsArray});
    // console.log(store.getState().highlights.highlights)
  };
  reader.readAsText(e.target.files[0]);

}



