/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */
import './App.css';
import React from 'react';
import { useStore } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Modal } from './components/Modal/Modal';
// import { useEffect, useRef } from 'react';

function App() {
  const store = useStore();

  return (
    <div className="App" store={store}>
      <Navbar />
      <div className="body">
        <Outlet />
      </div>
      <Modal />
    </div>
  );
}

export default App;
