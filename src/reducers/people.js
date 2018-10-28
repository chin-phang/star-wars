import * as Types from './constants';
import update from 'immutability-helper';

const initialState = {
  data: {},
  loading: false,
  error: undefined
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LIST_REQUEST:
      return update(state, {
        loading: {
          $set: true
        }
      });
    case Types.LIST_SUCCESS:
      return update(state, {
        loading: {
          $set: false
        },
        data: {
          $set: action.payload
        }
      });
    case Types.LIST_ERROR:
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
