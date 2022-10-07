import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Root from './pages/Root';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
