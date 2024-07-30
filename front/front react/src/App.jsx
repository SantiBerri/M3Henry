import React from 'react';
import NavBar from '../src/components/navbar/navbar'; 
import MyCarousel from '../src/components/carousel/carrousel';
import { Route, Routes } from 'react-router-dom'; 
import './App.css';
import Reservas from './components/paginas/reservas';
import LoginForm from './components/paginas/isesion';
import Pizzas from './components/paginas/pizzas';
import RegistrationForm from './components/paginas/register';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<MyCarousel />} />
        <Route path='/inicio' element={<MyCarousel />} />
        <Route path='/reservas' element={<Reservas />} />
        <Route path='/isesion' element={<LoginForm />} />
        <Route path='/pizzas' element={<Pizzas />} />
        <Route path='/register' element={<RegistrationForm />} />
      </Routes>
    </>
  );
}

export default App;