import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home } from './Home';
import { People } from './People';
import { Detail } from './Detail';
import { NotFound } from './NotFound';

export const peopleRoutes = {
  LIST: '/people/?page=1',
  DETAIL: '/people/:id'
};

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/people'} exact component={People} />
        <Route path={'/people/:id'} exact component={Detail} />
        <Route path="/404" exact component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    );
  }
}
