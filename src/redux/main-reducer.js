import { combineReducers } from 'redux';
import players from './player-reducer';
import teams from './team-reducer';

export default combineReducers({
  players,
  teams,
});
