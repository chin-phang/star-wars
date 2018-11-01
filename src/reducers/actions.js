import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import reduce from 'lodash/reduce';

import * as Types from './constants';
import * as Request from '../utils/request';

const fetchRequest = () => ({
  type: Types.FETCH_REQUEST
});

const listSuccess = response => ({
  type: Types.LIST_SUCCESS,
  payload: response
});

const detailSuccess = response => ({
  type: Types.DETAIL_SUCCESS,
  payload: response
});

const fetchError = error => ({
  type: Types.FETCH_ERROR,
  payload: error
});

const fetchURLs = async urls => {
  try {
    let responses = await Promise.all(map(urls, Request.get));

    return map(responses, res => res.data);
  } catch (error) {
    console.log('fetchURLs error: ', error);
  }
};

const fetchURL = async url => {
  try {
    let response = await Request.get(url);

    return response.data;
  } catch (error) {
    console.log('fetchURL error: ', error);
  }
};

const mapPeople = results => {
  return map(results, people => {
    return reduce(
      people,
      (acc, value, key) => {
        const arr = ['films', 'species', 'vehicles', 'starships'];

        if (arr.includes(key) && !isEmpty(value)) {
          fetchURLs(value).then(data => {
            acc[key] = data;
          });
        } else if (key === 'homeworld') {
          fetchURL(value).then(data => {
            acc[key] = data;
          });
        } else {
          acc[key] = value;
        }

        return acc;
      },
      {}
    );
  });
};

const mapDetail = people => {
  return reduce(
    people,
    (acc, value, key) => {
      const arr = ['films', 'species', 'vehicles', 'starships'];

      if (arr.includes(key) && !isEmpty(value)) {
        fetchURLs(value).then(data => {
          acc[key] = data;
        });
      } else if (key === 'homeworld') {
        fetchURL(value).then(data => {
          acc[key] = data;
        });
      } else {
        acc[key] = value;
      }

      return acc;
    },
    {}
  );
};

export const fetchAllPeople = url => async dispatch => {
  dispatch(fetchRequest());

  try {
    const response = await Request.get(url);
    const mappedResults = mapPeople(response.data.results);

    dispatch(
      listSuccess(Object.assign(response.data, { results: mappedResults }))
    );
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const fetchPeopleDetail = url => async dispatch => {
  dispatch(fetchRequest());

  try {
    const response = await Request.get(url);
    const mappedDetail = mapDetail(response.data);

    dispatch(detailSuccess(mappedDetail));
  } catch (error) {
    dispatch(fetchError(error));
  }
};
