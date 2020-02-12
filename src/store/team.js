import { TEAM_SUCCESS, API_FAIL } from '../actions';

const INIT_STATE = {
  team: {},
  errors: null
};

const team = (state = INIT_STATE, action) => {
  switch(action.type) {
    case TEAM_SUCCESS:
      return {
        ...state,
        team: action.data
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

export default team;