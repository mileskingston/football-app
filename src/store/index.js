import { combineReducers } from 'redux';
import standings from './standings';
import teams from './teams';

export default combineReducers({ standings, teams });