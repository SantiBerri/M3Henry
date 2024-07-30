import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MisTurnos.css'

const MisTurnos = () => {
  const user = useSelector(state => state.user); 
  const userAppointments = useSelector(state => state.userAppointments); 
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/'); 
    } else {

    }
  }, [user, history]);

  return (
    <div>
      <h1>Mis Turnos</h1>
      {userAppointments.length > 0 ? (
        <div>
         
          {userAppointments.map(turno => (
            <div key={turno.id} className="turno-item">
              <h3>{turno.fecha}</h3>
              <p>{turno.descripcion}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-message">No hay turnos agendados.</p>
      )}
    </div>
  );
};

export default MisTurnos;
