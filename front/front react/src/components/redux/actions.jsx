export const createTurn = (formData) => ({
  type: 'CREATE_TURN',
  payload: formData
});

export const loginSuccess = (userData) => ({
  type: 'LOGIN_SUCCESS',
  payload: userData,
});