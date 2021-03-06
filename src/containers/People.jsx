import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import queryString from 'query-string';
import map from 'lodash/map';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

import * as style from './people.scss';
import { fetchAllPeople } from '../reducers/actions';
import { Loading } from '../components/Loading';
import { peopleRoutes } from './routes';
import { constructId } from '../utils/helpers';
import { peopleSelector } from '../reducers/selectors';

const mapStateToProps = state => ({
  data: peopleSelector(state),
  loading: state.peopleReducer.loading
});

const mapDispatchToProps = {
  fetchAllPeople
};

export class PeopleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.linkTo = this.linkTo.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
  }

  componentDidMount() {
    let url = window.location.href.substr(
      window.location.href.indexOf('/people')
    );

    this.props.fetchAllPeople(url);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      let url = window.location.href.substr(
        window.location.href.indexOf('/people')
      );

      this.props.fetchAllPeople(url);
    }
  }

  linkTo(url) {
    if (url == null) return peopleRoutes.LIST;

    return url.substr(url.indexOf('/people'));
  }

  renderDetail(obj) {
    let id = constructId(obj.url, 'people/');

    return (
      <Link
        className={style.item}
        key={id}
        to={{
          pathname: `/people/${id}`,
          state: { popup: true }
        }}
      >
        {obj.name}
      </Link>
    );
  }

  render() {
    let qs = queryString.parse(this.props.location.search);
    let isVisible = !this.props.loading && this.props.data.count;

    return (
      <div className={style.peopleContainer}>
        <div className={style.head}>
          <h1>All People in the Universe</h1>
          <h4
            className={cx(`${style.page}`, {
              [`${style.hidden}`]: !isVisible
            })}
          >
            Page {qs.page || 1} of {Math.ceil(this.props.data.count / 10)}
          </h4>
        </div>

        <div className={style.people}>
          <div className={style.pageBtn}>
            <Link
              className={style.arrow}
              to={this.linkTo(this.props.data.previous)}
            >
              <FontAwesomeIcon icon={faChevronLeft} size="5x" />
            </Link>
          </div>

          {this.props.loading && <Loading />}

          {!this.props.loading && (
            <div className={style.itemContainer}>
              {map(this.props.data.results, item => this.renderDetail(item))}
            </div>
          )}

          <div className={style.pageBtn}>
            <Link
              className={style.arrow}
              to={this.linkTo(this.props.data.next)}
            >
              <FontAwesomeIcon icon={faChevronRight} size="5x" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export const People = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PeopleContainer)
);

PeopleContainer.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  fetchAllPeople: PropTypes.func,
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};
