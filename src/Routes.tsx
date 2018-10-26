import * as React from 'react';
import {Route, Switch} from 'react-router';

import { Hello } from "./components/Hello";

export class Routes extends React.Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path={'/'} exact={true} component={Hello} />
        </Switch>
      </React.Fragment>
    );
  }
}
