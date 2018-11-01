import * as React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { Home } from './Home';
import { People } from './People';
import { Detail } from './Detail';
import { NotFound } from './NotFound';
import { DetailNoPopup } from './DetailNoPopup';

export const peopleRoutes = {
  LIST: '/people/?page=1',
  DETAIL: '/people/:id'
};

export class RoutesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.previousLocation = props.location;
  }

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.popup)
    ) {
      this.previousLocation = location;
    }
  }

  render() {
    let { location } = this.props;

    let isPopup = !!(
      location.state &&
      location.state.popup &&
      this.previousLocation !== location
    );

    return (
      <React.Fragment>
        <Switch location={isPopup ? this.previousLocation : location}>
          <Route path={'/'} exact component={Home} />
          <Route path={'/people'} exact component={People} />
          <Route path={'/people/:id'} exact component={DetailNoPopup} />
          <Route path="/404" exact component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
        {isPopup ? (
          <Route path={'/people/:id'} exact component={Detail} />
        ) : null}
      </React.Fragment>
    );
  }
}

export const Routes = withRouter(RoutesContainer);

RoutesContainer.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};
