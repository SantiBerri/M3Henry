import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './forms.css';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !username || !age || !password) {
      setError('Por favor, complete todos los campos');
      return;
    } else {
      setError('');
    }

    try {
      const userData = {
        email,
        username,
        age,
        password
      };

      const response = await axios.post('http://localhost:3000/users', userData);
      

      if (response.status === 200) {
        console.log('Registro exitoso:', response.data);
        navigate('/login'); // Navega a la ruta de login
      } else {
        console.error('Error en el registro:', response.data);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      if (error.response) {
        // Manejo de errores de respuesta del servidor
        setError(error.response.data.message);
      } else {
        setError('Error en la solicitud');
      }
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registro</h2>
      {error && <div className="error-message">{error}</div>}
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Nombre de usuario:</label>
          <input className="form-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Edad:</label>
          <input className="form-input" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Contraseña:</label>
          <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="submit-button" type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default RegistrationForm;