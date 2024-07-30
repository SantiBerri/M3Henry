import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Reservas() {

  const reservas = useSelector(state => state.reservas);

  return (
    <div>
      <h1>Reservas</h1>
      <ul>
        {reservas.map(reserva => (
          <li key={reserva.id}>
            Fecha: {reserva.fecha}, Hora: {reserva.hora}, Cantidad de Personas: {reserva.cantidadPersonas}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reservas;