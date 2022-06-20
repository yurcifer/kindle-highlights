import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Highlight } from './components/Highlight/Highlight';
import { DropZone } from './components/DropZone/DropZone';
import { useEffect, useRef, useState } from 'react';
import { useStore } from 'react-redux';
// import { useEffect, useRef } from 'react';

function App() {

  const store = useStore();
  //TODO: find more elegant way to force render
  const [value, setValue] = useState(0); // state to force render
  const pageLength = useRef(50)

  const getHighlights = () => {
    return store.getState().highlights.highlights;
  }
  const highlights = getHighlights() || [];
  console.log(highlights.slice(0, 10))
  console.log(store.getState())

  const handleScroll = (e) => {
    if ( 
      (window.innerHeight + e.target.documentElement.scrollTop + 1) >=
      e.target.documentElement.scrollHeight
    ) {
      pageLength.current = pageLength.current + 50;
      setValue(value => value + 1);
    }
  }

  useEffect( () => {
    window.addEventListener('dragleave', (e) => { 
      e.preventDefault();
      e.stopPropagation();
    });
    window.addEventListener('scroll', handleScroll);
  }, [])

  const search = (highlights, query) => {
    const result = highlights.filter( item => {
        return JSON.stringify(item).toLowerCase().includes(query.toLowerCase());
      }
    )
    return result;
  }

  return (
      <div className="App" store={store}>
        <Navbar search={search} />
        <div className='body'>
            <DropZone className='upload-button' />
          <div className='content-wrapper' >{
            highlights.length
            ? search(highlights, store.getState().searchQuery).slice(0, pageLength.current).map( (item, index) => 
                  <Highlight key={index} {...item} />
              ) || <p>wtf)</p>
            : <p>Data dosn't load yet</p>
          }
          </div>
        </div>
      </div>
  );
}

export default App;
