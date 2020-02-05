import { TEAMS_SUCCESS, API_FAIL } from '../actions';

const INIT_STATE = {
  teams: [],
  errors: null
};

const teams = (state = INIT_STATE, action) => {
  switch(action.type) {
    case TEAMS_SUCCESS:
      return {
        ...state,
        teams: action.teams
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

export default teams;