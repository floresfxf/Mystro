import { combineReducers } from 'redux';
import prefs from './preferences';
import nav from './nav';

export default combineReducers({
  prefs,
  nav
});
