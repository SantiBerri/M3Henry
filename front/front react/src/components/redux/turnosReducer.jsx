const initialState = {
    turnosList: [] 
  };
  
  function turnosReducer(state = initialState, action) {
    switch (action.type) {
      case 'CREATE_TURN':
        return {
          ...state,
          turnosList: [...state.turnosList, action.payload]
        };

      default:
        return state;
    }
  }
  
  export default turnosReducer;