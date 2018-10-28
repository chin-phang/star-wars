import * as ActionTypes from './constants';
import update from 'immutability-helper';

const initialState = {
  data: {},
  loading: false,
  error: undefined
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LIST_REQUEST:
      return update(state, {
        loading: {
          $set: true
        }
      });
    case ActionTypes.LIST_SUCCESS:
      return update(state, {
        loading: {
          $set: false
        },
        data: {
          $set: action.payload
        }
      });
    case ActionTypes.LIST_ERROR:
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

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DETAIL_REQUEST:
      return update(state, {
        loading: {
          $set: true
        }
      });
    case ActionTypes.DETAIL_SUCCESS:
      return update(state, {
        loading: {
          $set: false
        },
        data: {
          $set: action.payload
        }
      });
    case ActionTypes.DETAIL_ERROR:
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
