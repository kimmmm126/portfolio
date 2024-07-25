import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import File from './pages/file';
import './styles/_styles.scss';

function App() {
  return (
    <div className="wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/file" element={<File />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
