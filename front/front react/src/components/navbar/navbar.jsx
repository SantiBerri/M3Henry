import React from 'react';
import { useSelector } from 'react-redux';
import './navbar.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import userAvatar from '../redux/userAvatar'; // Asegúrate de que el nombre de importación coincida con el nombre del archivo y exportación

function NavBar() {
  // Asegúrate de que 'auth' es tu reducer de autenticación y que está definido
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);

  return (
    <header>
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
      <div className="buttons">
        <ul className="ul">
          <li>
            <Link className="btn btn-outline-secondary" to='/inicio'>Inicio</Link>
          </li>
          <li>
            <Link className="btn btn-outline-secondary" to='/pizzas'>Carta</Link>
          </li>
          <li>
            <Link className="btn btn-outline-secondary" to='/reservas'>Reservas</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <userAvatar /> // Asegúrate de que el componente se llama 'userAvatar'
            ) : (
              <Link className="btn btn-outline-secondary" to='/isesion'>Iniciar Sesion</Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;