import { combineReducers } from 'redux';

import { peopleReducer, detailReducer } from '../reducers/people';

export const rootReducer = combineReducers({
  peopleReducer,
  detailReducer
});
