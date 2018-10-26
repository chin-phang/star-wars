import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './main.scss';
import { Routes } from './Routes';

interface AppProps {}

export class App extends React.Component<AppProps, any> {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}
