import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Home from './pages/Home/Home.js';
import Notes from './pages/Notes/Notes.js';
import './App.css'; 

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
