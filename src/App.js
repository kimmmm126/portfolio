import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import File from './pages/file';
import './styles/_styles.scss';

function App() {
  return (
    <div className="wrap">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Home />
      </BrowserRouter>
    </div>
  );
}
export default App;
