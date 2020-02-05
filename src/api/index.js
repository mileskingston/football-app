const API_URL = 'http://api.football-data.org/v2/competitions/2021/standings';
const API_KEY = '2ae43623e3f842aaae192600b506bea2';

export function callFootballApi() {
  return fetch(
    API_URL,
    { headers: { 'X-Auth-Token': API_KEY }}
  )
  .then(res => res.json())
  .then(res => res.standings[0].table);
};