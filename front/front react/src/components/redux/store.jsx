import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; 

const initialState = {
  reservas: [], 
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;