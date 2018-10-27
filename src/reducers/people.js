import * as ActionTypes from './constants';
import update from 'immutability-helper';

const initialState = {
  data: {},
  loading: false,
  error: undefined
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_REQUEST:
      return update(state, {
        loading: {
          $set: true
        }
      });
    case ActionTypes.FETCH_SUCCESS:
      return update(state, {
        loading: {
          $set: false
        },
        data: {
          $set: action.payload
        }
      });
    case ActionTypes.FETCH_ERROR:
      return update(state, {
        loading: {
          $set: false
        },
        error: {
          $set: action.payload
        }
      });
    default:
      return state;
  }
};
