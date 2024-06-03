import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const manualUser = JSON.parse(localStorage.getItem('user'));

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {(user || manualUser) ? (
          <li><button onClick={() => { auth.signOut(); localStorage.removeItem('user'); }}>Logout</button></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
