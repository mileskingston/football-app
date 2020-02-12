import { combineReducers } from 'redux';
import standings from './standings';
import teams from './teams';
import team from './team';

export default combineReducers({ standings, teams, team });