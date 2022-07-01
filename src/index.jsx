import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './variables.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './store';
import App from './App';
import Main from './routes/Main/Main';
import About from './routes/about/about';

const root = ReactDOM.createRoot(document.getElementById('root'));
function AppWithProvider() {
  return (
    <Provider store={store}>
      <App>{Children}</App>
    </Provider>
  );
}
const render = () => {
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppWithProvider />}>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  );
};

store.subscribe(render);
render();
