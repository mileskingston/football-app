import { STANDINGS_SUCCESS, API_FAIL } from '../actions';

const INIT_STATE = {
  standings: [],
  errors: null
};

const standings = (state = INIT_STATE, action) => {
  switch(action.type) {
    case STANDINGS_SUCCESS:
      return {
        ...state,
        ...action.standings
      };
    case API_FAIL:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
}

export default standings;