import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pixa from './components/Pixa';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Pixa />} />
          <Route path="/pixa" element={<Pixa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
