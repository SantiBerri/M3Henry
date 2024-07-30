import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservas: [], 
};

export const reservasSlice = createSlice({
  name: 'reservas',
  initialState,
  reducers: {
    createReserva: (state, action) => {
      state.reservas.push(action.payload); 
    },
  },
});

export const { createReserva } = reservasSlice.actions;

export default reservasSlice.reducer;
