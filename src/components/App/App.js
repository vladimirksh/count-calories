import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Diary from '../Diary/Diary';
import Tips from '../Tips/Tips';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';




function App() {
  return (
      <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Diary />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
      </>
  );
}

export default App;
