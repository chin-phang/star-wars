import * as Types from './constants';
import * as Request from '../utils/request';

const listRequest = () => ({
  type: Types.LIST_REQUEST
});

const listSuccess = response => ({
  type: Types.LIST_SUCCESS,
  payload: response
});

const listError = error => ({
  type: Types.LIST_ERROR,
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
