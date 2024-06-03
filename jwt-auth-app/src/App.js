import React, { useState } from 'react';
import { Routes, Route,Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    const handleLogin = (token) => {
        localStorage.setItem('token', token);
        setToken(token);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    return (
        <Routes> 
            <Route
                path="/login"
                element={!token ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} 
            />
            <Route
                path="/"
                element={token ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />} 
            />
        </Routes>
    );
};

export default App;
