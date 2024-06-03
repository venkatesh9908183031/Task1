import React from 'react';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem('user');
    navigate('/login');
  };

  const manualUser = JSON.parse(localStorage.getItem('user'));

  if (!user && !manualUser) {
    navigate('/login');
  }

  return (
    <div>
      <h1>Home</h1>
      {user || manualUser ? (
        <div>
          <p>Welcome, {user?.displayName || manualUser.displayName}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};

export default Home;
