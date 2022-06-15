import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { uploadFile } from './utilities/text_parser/parser';
import { store } from './store/index';
import { Highlight } from './components/Highlight/Highlight';
// import { useEffect, useRef } from 'react';

function App() {
  const getHighlights = () => {
    return store.getState().highlights.highlights;
  }

  const highlights = getHighlights();
  // console.log(highlights);
  let key = 0;
  return (
    <div className="App" store={store}>
      <Navbar />
      <div className='body'>
        
          <label className='upload-button'>
            <input name="upload" id="input-highlights" type="file" onChange={(e) => uploadFile(e)} style={{display: "none"}}></input>
              Upload "My Clipping.txt"
          </label>
       
        <div className='content-wrapper'>{
          highlights
          ? getHighlights().map( (item) => 
                <Highlight key={key++} item={item} />
            )
          : <p>Data dosn't load yet</p>
        }
        </div>
      </div>
    </div> 
  );
}

export default App;
