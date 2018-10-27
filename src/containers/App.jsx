import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import '../main.scss';
import { Routes } from './routes';
import { configureStore } from '../store';

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Provider store={configureStore()}>
          <Routes />
        </Provider>
      </Router>
    );
  }
}
