import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { store } from './store/index';
import { Highlight } from './components/Highlight/Highlight';
import { DropZone } from './components/DropZone/DropZone';
import { useRef } from 'react';
// import { useEffect, useRef } from 'react';

function App() {
  const wrapperRef = useRef(null);

  const getHighlights = () => {
    return store.getState().highlights.highlights;
  }
  const highlights = getHighlights();

  let key = 0;
  return (
    <div className="App" store={store}>
      <Navbar />
      <div className='body'>
          <DropZone className='upload-button' />
        <div className='content-wrapper' ref={wrapperRef}>{
          highlights
          ? getHighlights().map( (item) => 
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
