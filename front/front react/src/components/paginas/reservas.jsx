import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTurn } from '../redux/actions'; 

function Reservas({ createTurn }) {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [cantidadPersonas, setCantidadPersonas] = useState('');
  const [servicio, setServicio] = useState('');
  const [solicitud, setSolicitud] = useState('');
  const [reservaCreada, setReservaCreada] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      fecha,
      hora,
      cantidadPersonas,
      servicio,
      solicitud
    };

    try {
      const response = await fetch('http://localhost:3000/reserves', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

     
      const reservaCreada = await response.json();
      setReservaCreada(reservaCreada);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  const handleCancelReservation = () => {
    setReservaCreada(null); 
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Reservas</h2>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Fecha:</label>
          <input className="form-input" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Hora:</label>
          <select className="form-select" value={hora} onChange={(e) => setHora(e.target.value)}>
            <option value="">Seleccione una hora</option>
            {[...Array(24)].map((_, hour) => {
              const displayHour = hour < 10 ? `0${hour}` : hour;
              if ((hour >= 10 && hour < 15) || (hour >= 18 && hour <= 23)) {
                return <option key={hour} value={`${displayHour}:00`}>{`${displayHour}:00`}</option>;
              } else {
                return null;
              }
            })}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Cantidad de personas:</label>
          <input className="form-input" type="number" value={cantidadPersonas} onChange={(e) => setCantidadPersonas(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Servicio:</label>
          <select className="form-select" value={servicio} onChange={(e) => setServicio(e.target.value)}>
            <option value="">Seleccione un servicio</option>
            <option value="almuerzo">Almuerzo</option>
            <option value="cena">Cena</option>
            <option value="brunch">Brunch</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Solicitud:</label>
          <textarea className="form-textarea" value={solicitud} onChange={(e) => setSolicitud(e.target.value)} />
        </div>
        <button className="submit-button" type="submit">Enviar</button>
      </form>

  
      {reservaCreada && (
        <div className="reservation-details">
          <h3>Detalles de la reserva</h3>
          <p>Fecha: {reservaCreada.fecha}</p>
          <p>Hora: {reservaCreada.hora}</p>
          <p>Cantidad de personas: {reservaCreada.cantidadPersonas}</p>
          <p>Servicio: {reservaCreada.servicio}</p>
          <p>Solicitud: {reservaCreada.solicitud}</p>
          <button className="cancel-button" onClick={handleCancelReservation}>Cancelar reserva</button>
        </div>
      )}
    </div>
  );
}

export default Reservas;
