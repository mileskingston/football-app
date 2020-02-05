export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAIL = 'API_FAIL';

export const apiRequest = () => ({
  type: API_REQUEST
});
export const apiSuccess = (data) => ({
  type: API_SUCCESS,
  data
});
export const apiFail = (data) => ({
  type: API_FAIL,
  data
});

export const callFormRequest = () => ({
  type: API_REQUEST
});