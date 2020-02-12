export const STANDINGS_REQUEST = 'STANDINGS_REQUEST';
export const TEAMS_REQUEST = 'TEAMS_REQUEST';
export const TEAM_REQUEST = 'TEAM_REQUEST';
export const STANDINGS_SUCCESS = 'STANDINGS_SUCCESS';
export const TEAMS_SUCCESS = 'TEAMS_SUCCESS';
export const TEAM_SUCCESS = 'TEAM_SUCCESS';
export const API_FAIL = 'API_FAIL';

export const standingsRequest = () => ({
  type: STANDINGS_REQUEST
});

export const teamsRequest = () => ({
  type: TEAMS_REQUEST
});

export const teamRequest = () => ({
  type: TEAM_REQUEST
});

export const teamSuccess = (data) => ({
  type: TEAM_SUCCESS,
  data
});

export const teamsSuccess = (data) => ({
  type: TEAMS_SUCCESS,
  data
});

export const standingsSuccess = (data) => ({
  type: STANDINGS_SUCCESS,
  data
});

export const apiFail = (data) => ({
  type: TEAMS_SUCCESS,
  data
});