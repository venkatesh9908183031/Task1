import React, { useState, useEffect } from 'react';
import { useSignInWithGoogle, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { auth, googleProvider, facebookProvider } from './firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);

  const handleManualLogin = (e) => {
    e.preventDefault();
    if (username === 'Hunter' && password === '4321') {
      localStorage.setItem('user', JSON.stringify({ displayName: 'Hunter' }));
      toast.success('Login successful!', {
        onClose: () => window.location.href = 'https://www.amazon.in/l/14156834031?ref=pd_sl_GoogleAds_Echo_Generic_SmartHome'
      });
    } else {
      setError('Invalid username or password');
    }
  };

  useEffect(() => {
    if (userGoogle || userFacebook) {
      toast.success('Login successful!', {
        onClose: () => window.location.href = 'https://www.amazon.in/l/14156834031?ref=pd_sl_GoogleAds_Echo_Generic_SmartHome'
      });
    }
  }, [userGoogle, userFacebook]);

  if (loadingGoogle || loadingFacebook) {
    return <div>Loading...</div>;
  }

  const handleGoogleLogin = () => {
    window.location.href = 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AS5LTATl-wxR7iObt0q2QBGlp58-2f-SIwPwWvsG-yGyGEcyR0EqKh_PoYMb-dxmQZW4kb0AzapmsQ&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1158618115%3A1717393707282300&ddm=0';
  };

  const handleFacebookLogin = () => {
    window.location.href = 'https://www.facebook.com/';
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleManualLogin} className="login-form">
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {errorGoogle && <p>Error: {errorGoogle.message}</p>}
      {errorFacebook && <p>Error: {errorFacebook.message}</p>}
      <button className="login-button google" onClick={handleGoogleLogin}>Login with Google</button>
      <button className="login-button facebook" onClick={handleFacebookLogin}>Login with Facebook</button>
      <ToastContainer />
    </div>
  );
};

export default Login;
