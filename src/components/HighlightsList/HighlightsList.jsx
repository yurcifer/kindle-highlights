import React from 'react';
import { useStore } from 'react-redux/es/exports';
import { Highlight } from '../Highlight/Highlight';

// eslint-disable-next-line react/prop-types
export default function HighlightsList({ pageLength }) {
  const store = useStore();
  const highlights = store.getState().highlights.highlights || [];

  const search = (highlightsArr, query) => highlightsArr.filter((item) => JSON.stringify(item)
    .toLowerCase()
    .includes(query.toLowerCase()));

  // if (highlights.length) console.log(highlights);
  return (
    <div>
      {highlights.length ? (
        search(highlights, store.getState().searchQuery)
          .slice(0, pageLength)
          .map((item) => (
            <Highlight
              key={item.hash}
              highlight={item.highlight}
              title={item.title}
            />
          ))
      ) : <p>Data dosn&apos;t load yet</p>}
    </div>
  );
}
