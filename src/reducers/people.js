import * as Types from './constants';
import update from 'immutability-helper';

const initialState = {
  list: {},
  detail: {},
  loading: false,
  error: undefined
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_REQUEST:
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
        list: {
          $set: action.payload
        }
      });
    case Types.DETAIL_SUCCESS:
      return update(state, {
        loading: {
          $set: false
        },
        detail: {
          $set: action.payload
        }
      });
    case Types.FETCH_ERROR:
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
