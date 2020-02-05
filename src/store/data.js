import { API_SUCCESS } from '../actions';

const INIT_STATE = {
  standings: [],
  errors: null
};

const table = (state = INIT_STATE, action) => {
  switch(action.type) {
    case API_SUCCESS:
      return {
        ...state,
        standings: action.standings
      };
    case API_SUCCESS:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
}

export default table;