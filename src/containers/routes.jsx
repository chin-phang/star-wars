import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { People } from './People';
import { Detail } from '../components/Detail';

export const peopleRoutes = {
  PEOPLE: '/people',
  DETAIL: '/people/:id'
};

export class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path={'/'} exact={true} component={Home} />
          <Route path={'/people'} exact={true} component={People} />
          <Route path={'/people/:id'} exact={true} component={Detail} />
        </Switch>
      </React.Fragment>
    );
  }
}
