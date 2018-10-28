import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as Actions from './actions';
import * as Types from './constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchAllPeople actions', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('creates LIST_SUCCESS after successfully fetching people', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: fetchAllPeopleMock
      });
    });

    const expectedActions = [
      { type: Types.LIST_REQUEST },
      { type: Types.LIST_SUCCESS, payload: response }
    ];

    const store = mockStore({ data: {}, loading: false, error: undefined });

    return store.dispatch(
      Actions.fetchAllPeople('/people').then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });
});
