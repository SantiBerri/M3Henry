import { combineReducers } from 'redux';

const initialState = {
  reservas: [],
};

const reservasReducer = (state = initialState.reservas, action) => {
  switch (action.type) {
    case 'CREAR_RESERVA':
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reservas: reservasReducer,
});

export default rootReducer;