import { digest } from 'object-sha';
import { store } from '../../store/index';

const cutSideSpaces = (str) => str.replace(/^\s+|\s+$/g, '');

const splitMetadata = (str) => {
  const cuttedStr = str.replace(/^-\s/, '');
  const splitted = cuttedStr.split('|');
  return {
    location: splitted[0],
    date: splitted[1],
  };
};

const splitTitle = (str) => {
  const reverseStrArray = [];
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ')') {
      if (str[i] === '(') break;
      reverseStrArray.push(str[i]);
    }
  }

  const author = reverseStrArray.reverse().join('');
  const title = str.replace(`(${author})`, '');

  return {
    author: cutSideSpaces(author),
    title: cutSideSpaces(title),
  };
};

export const uploadFile = async (e) => {
  const reader = new FileReader();

  // eslint-disable-next-line no-shadow
  reader.onload = async (e) => {
    const text = e.target.result;

    const segments = text.split('==========');
    const highlighsArray = [];
    segments.forEach((item) => {
      // clippings file has full of \r sequence, I guess it is unnecessary in JSON store
      const splitted = item.replace(/\r/g, '').split(/\n/);
      // delete empty lines
      // eslint-disable-next-line no-shadow
      splitted.forEach((item, index) => {
        if (item.length === 0) {
          splitted.splice(index, 1);
        }
      });
      // I saw some empty highlights in kindle file (may be created by missclick),
      // so added next string
      if (!splitted[2]) return;
      const highlight = {
        title: splitTitle(splitted[0]),
        meta: splitMetadata(splitted[1]),
        highlight: splitted[2],
      };
      // TODO: make next function pure, or handle promises without async await
      // eslint-disable-next-line func-names
      (async function () {
        const result = await digest(highlight);
        highlight.hash = result;
        // sometimes highlights have dublicates (with exactly same creation time hh:mm:ss),
        // so here we ensure next highligh isn't duplicate
        const prevHighlight = highlighsArray[highlighsArray.length - 1] || { hash: null };
        if (prevHighlight.hash !== highlight.hash) {
          highlighsArray.push(highlight);
        }
      }());
    });
    // added dispatch to macrotask queue, because hashes calculetes in microtask queue
    setTimeout(() => store.dispatch({ type: 'INIT', data: highlighsArray }));
  };
  reader.readAsText(e.target.files[0]);
};
