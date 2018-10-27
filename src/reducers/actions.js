import * as ActionTypes from './constants';
import * as Request from '../utils/request';

const fetchRequest = () => ({
  type: ActionTypes.FETCH_REQUEST
});

const fetchSuccess = response => ({
  type: ActionTypes.FETCH_SUCCESS,
  payload: response
});

const fetchError = error => ({
  type: ActionTypes.FETCH_ERROR,
  payload: error
});

export const fetchPeople = url => async dispatch => {
  const url = url || '/people';

  dispatch(fetchRequest());

  try {
    const response = await Request.get(url);

    dispatch(fetchSuccess(response.data));
  } catch (error) {
    dispatch(fetchError(error));
  }
};
