// Login.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginSuccess } from './actions';
import LoginForm from '../paginas/isesion';

const Login = ({ loginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'usuario' && password === 'contraseña') {
        const userData = { username, email: 'usuario@example.com', id: 123 }; 
        loginSuccess(userData);
      } else {
        console.error('Credenciales inválidas');
      }
    };
    const userData = { username, password }; 
    loginSuccess(userData); 


  return (
    <LoginForm />
  );

};

export default connect(null, { loginSuccess })(Login);
