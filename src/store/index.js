import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';

export const configureStore = (preLoadedState = {}) => {
  const middlewares = [thunk];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' ? composeWithDevTools : compose;

  const store = createStore(
    rootReducer,
    preLoadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};
