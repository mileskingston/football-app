const API_KEY = '2ae43623e3f842aaae192600b506bea2';
const API_URL = 'http://api.football-data.org/v2';
const STANDINGS = '/competitions/2021/standings';
const TEAMS = '/competitions/2021/teams';

export function callStandingsApi() {
  return fetch(
    `${API_URL}${STANDINGS}`,
    { headers: { 'X-Auth-Token': API_KEY }}
  )
  .then(res => res.json())
  .then(res => {
    return res.standings[0].table
  });
};

export function callTeamsApi() {
  return fetch(
    `${API_URL}${TEAMS}`,
    { headers: { 'X-Auth-Token': API_KEY }}
  )
  .then(res => res.json())
  .then(res => {
    return res.teams
  });
};