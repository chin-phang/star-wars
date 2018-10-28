import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import '../main.scss';
import { Routes } from './routes';
import { configureStore } from '../store';

const history = createHistory();
const store = configureStore();

export class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Router>
    );
  }
}
