import { createSelector } from 'reselect';
import find from 'lodash/find';

const resultsSelector = state => state.data.results;

export const peopleSelector = createSelector(resultsSelector, results => {
  let url = window.location.href.substr(window.location.href.indexOf('people'));

  return find(results, { url: `https://swapi.co/api/${url}/` });
});
