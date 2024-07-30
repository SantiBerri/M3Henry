import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './forms.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password
      });

      if (response.status === 200) {
        const userData = response.data;
        dispatch(loginSuccess(userData));
        navigate('/');
      } else {
        setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error en la autenticación:', error);
      setError('Error en la autenticación. Por favor, inténtalo de nuevo.');
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div className="form-container">
      <h2 className="login-form-title">Inicio de Sesión</h2>
      {error && <div className="error-message">{error}</div>}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Nombre de Usuario:</label>
          <input className="form-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
        <label className="form-label">Contraseña:</label>
        <input className="form-input" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="submit-button" type="submit">Iniciar Sesión</button>
      </form>
      <p>No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
    </div>
  );
}

export default LoginForm;
