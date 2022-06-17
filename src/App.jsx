import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { store } from './store/index';
import { Highlight } from './components/Highlight/Highlight';
import { DropZone } from './components/DropZone/DropZone';
import { useEffect, useRef, useState } from 'react';
// import { useEffect, useRef } from 'react';

function App() {
  // const wrapperRef = useRef(null);
  const pageLength = useRef(50)
  const [value, setValue] = useState(0); // state to force render
  

  const getHighlights = () => {
    return store.getState().highlights.highlights;
  }
  const highlights = getHighlights() || [];
  console.log(highlights.slice(10))

  const handleScroll = (e) => {
    if ( 
      (window.innerHeight + e.target.documentElement.scrollTop + 1) >=
      e.target.documentElement.scrollHeight
    ) {
      pageLength.current = pageLength.current + 50;
      console.log(pageLength)
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

  let key = 0;
  return (
    <div className="App" store={store}>
      <Navbar />
      <div className='body'>
          <DropZone className='upload-button' />
        <div className='content-wrapper' >{
          highlights
          ? highlights.slice(0, pageLength.current).map( (item) => 
                <Highlight key={key++} {...item} />
            )
          : <p>Data dosn't load yet</p>
        }
        </div>
      </div>
    </div> 
  );
}

export default App;
