import React, {useState} from 'react';
import './App.css';
import Header from '../Header/Header';
import Diary from '../Diary/Diary';
import Tips from '../Tips/Tips';
import { Routes, Route, Navigate} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';




function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
      <>
      <Header />
      {loggedIn&& <NavBar />}
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to="/diary" /> : <Navigate to="/login" />} />
        <Route path="/diary" element={<ProtectedRoute  loggedIn={loggedIn}/>}>
          <Route path="/diary" element={<Diary />} />
        </Route>
        <Route path="/tips" element={<ProtectedRoute  loggedIn={loggedIn}/>}>
          <Route path="/tips" element={<Tips />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </>
  );
}

export default App;
