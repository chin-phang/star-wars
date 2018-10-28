import * as ActionTypes from './constants';
import * as Request from '../utils/request';

const listRequest = () => ({
  type: ActionTypes.LIST_REQUEST
});

const listSuccess = response => ({
  type: ActionTypes.LIST_SUCCESS,
  payload: response
});

const listError = error => ({
  type: ActionTypes.LIST_ERROR,
  payload: error
});

export const fetchAllPeople = url => async dispatch => {
  dispatch(listRequest());

  try {
    const response = await Request.get(url);

    dispatch(listSuccess(response.data));
  } catch (error) {
    dispatch(listError(error));
  }
};

const detailRequest = () => ({
  type: ActionTypes.DETAIL_REQUEST
});

const detailSuccess = response => ({
  type: ActionTypes.DETAIL_SUCCESS,
  payload: response
});

const detailError = error => ({
  type: ActionTypes.DETAIL_ERROR,
  payload: error
});

export const fetchDetail = url => async dispatch => {
  dispatch(detailRequest());

  try {
    const response = await Request.get(url);

    dispatch(detailSuccess(response.data));
  } catch (error) {
    dispatch(detailError(error));
  }
};
