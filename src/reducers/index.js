import { combineReducers } from 'redux';

import alerts from './alerts';
import dataCollection from './dataCollection';

const rootReducer = combineReducers({
  alerts,
  dataCollection,
});

export default rootReducer;
