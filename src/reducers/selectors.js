import { createSelector } from 'reselect';

export const peopleSelector = state => state.peopleReducer.list || {};

export const detailSelector = state => state.peopleReducer.detail || {};

export const resultsSelector = createSelector(
  peopleSelector,
  people => people.results
);
