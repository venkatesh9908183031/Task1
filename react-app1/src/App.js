import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Navbar from './Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';

function App() {
  const [user] = useAuthState(auth);
  const manualUser = JSON.parse(localStorage.getItem('user'));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={(user || manualUser) ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={(user || manualUser) ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
