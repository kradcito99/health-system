import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logoo from '../assets/User_logo.png'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    
    if (username && password) {
      login();
      navigate('/'); 
    } else {
      alert("Por favor, ingresa un nombre de usuario y una contraseña.");
    }
  };

  return (
    <div className="login-page">
      <img src={logoo} alt='Logo' className='login-image' />
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
