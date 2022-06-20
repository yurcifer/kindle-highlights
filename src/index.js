import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './variables.css'
import App from './App';
import { Provider} from 'react-redux';
import { store } from './store';



const root = ReactDOM.createRoot(document.getElementById('root'));
const render = () => {
  root.render(
    // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    // </React.StrictMode>
  );
}

store.subscribe(render);
render();